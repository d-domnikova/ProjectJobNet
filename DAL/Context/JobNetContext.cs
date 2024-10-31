﻿using DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Context
{
    public class JobNetContext : DbContext
    {
        public JobNetContext(DbContextOptions<JobNetContext> options) : base(options) { }

        public DbSet<Role> Roles { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<Resume> Resumes { get; set; }
        public DbSet<BlogPost> BlogPosts { get; set; }
        public DbSet<Service> Services { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<JobTag> JobTags { get; set; }
        public DbSet<ServiceTag> ServiceTags { get; set; }
        public DbSet<Subscription> Subscriptions { get; set; }
        public DbSet<SubscriptionPlan> SubscriptionPlans { get; set; }
        public DbSet<Complaint> Complaints { get; set; }
        public DbSet<Warning> Warnings { get; set; }
        public DbSet<LikedPost> LikedPosts { get; set; }
        public DbSet<SavedJob> SavedJobs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Конфігурація для таблиці JobTags (багато-до-багатьох зв'язок між Job і Tag)
            modelBuilder.Entity<JobTag>()
                .HasKey(jt => new { jt.JobId, jt.TagId });

            modelBuilder.Entity<JobTag>()
                .HasOne(jt => jt.Job)
                .WithMany(j => j.JobTags)
                .HasForeignKey(jt => jt.JobId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<JobTag>()
                .HasOne(jt => jt.Tag)
                .WithMany(t => t.JobTags)
                .HasForeignKey(jt => jt.TagId)
                .OnDelete(DeleteBehavior.Cascade);

            // Конфігурація для таблиці ServiceTags (багато-до-багатьох зв'язок між Service і Tag)
            modelBuilder.Entity<ServiceTag>()
                .HasKey(st => new { st.ServiceId, st.TagId });

            modelBuilder.Entity<ServiceTag>()
                .HasOne(st => st.Service)
                .WithMany(s => s.ServiceTags)
                .HasForeignKey(st => st.ServiceId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<ServiceTag>()
                .HasOne(st => st.Tag)
                .WithMany(t => t.ServiceTags)
                .HasForeignKey(st => st.TagId)
                .OnDelete(DeleteBehavior.Cascade);

            // Конфігурація для таблиці LikedPosts (багато-до-багатьох зв'язок між User і BlogPost)
            modelBuilder.Entity<LikedPost>()
                .HasKey(lp => new { lp.UserId, lp.PostId });

            modelBuilder.Entity<LikedPost>()
                .HasOne(lp => lp.User)
                .WithMany(u => u.LikedPosts)
                .HasForeignKey(lp => lp.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<LikedPost>()
                .HasOne(lp => lp.Post)
                .WithMany(bp => bp.LikedPosts)
                .HasForeignKey(lp => lp.PostId)
                .OnDelete(DeleteBehavior.Cascade);

            // Конфігурація для таблиці SavedJobs (багато-до-багатьох зв'язок між User (роботодавець) і Job)
            modelBuilder.Entity<SavedJob>()
                .HasKey(sj => new { sj.EmployerId, sj.JobId });

            modelBuilder.Entity<SavedJob>()
                .HasOne(sj => sj.Employer)
                .WithMany(u => u.SavedJobs)
                .HasForeignKey(sj => sj.EmployerId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<SavedJob>()
                .HasOne(sj => sj.Job)
                .WithMany(j => j.SavedJobs)
                .HasForeignKey(sj => sj.JobId)
                .OnDelete(DeleteBehavior.Cascade);

            // Конфігурація для таблиці Reviews (зв'язок один-до-багатьох між User (Author) і Review)
            modelBuilder.Entity<Review>()
                .HasOne(r => r.Author)
                .WithMany(u => u.Reviews)
                .HasForeignKey(r => r.AuthorId)
                .OnDelete(DeleteBehavior.Cascade);

            // Конфігурація для таблиці Complaints (зв'язок між User (Complainant) і BlogPost)
            modelBuilder.Entity<Complaint>()
        .HasOne(c => c.Complainant)
        .WithMany(u => u.Complaints)
        .HasForeignKey(c => c.ComplainantId)
        .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<Complaint>()
         .HasOne(c => c.TargetPost)
         .WithMany(bp => bp.Complaints)
         .HasForeignKey(c => c.TargetPostId)
         .OnDelete(DeleteBehavior.Restrict);

            // Конфігурація для таблиці Warnings (зв'язок між Moderator, User, і Complaint)
            modelBuilder.Entity<Warning>()
        .HasOne(w => w.Moderator)
        .WithMany()
        .HasForeignKey(w => w.ModeratorId)
        .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Warning>()
         .HasOne(w => w.User)
         .WithMany()
         .HasForeignKey(w => w.UserId)
         .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Warning>()
         .HasOne(w => w.Complaint)
         .WithMany()
         .HasForeignKey(w => w.ComplaintId)
         .OnDelete(DeleteBehavior.Restrict);

            // Конфігурації для інших таблиць
            modelBuilder.Entity<User>()
                .HasOne(u => u.Role)
                .WithMany(r => r.Users)
                .HasForeignKey(u => u.RoleId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Job>()
                .HasOne(j => j.User)
                .WithMany(u => u.Jobs)
                .HasForeignKey(j => j.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Job>()
                .HasOne(j => j.Category)
                .WithMany(c => c.Jobs)
                .HasForeignKey(j => j.CategoryId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Resume>()
                .HasOne(r => r.User)
                .WithMany(u => u.Resumes)
                .HasForeignKey(r => r.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Service>()
                .HasOne(s => s.User)
                .WithMany(u => u.Services)
                .HasForeignKey(s => s.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Service>()
                .HasOne(s => s.Category)
                .WithMany(c => c.Services)
                .HasForeignKey(s => s.CategoryId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Subscription>()
        .HasOne(s => s.User)
        .WithMany(u => u.Subscriptions)
        .HasForeignKey(s => s.UserId)
        .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Subscription>()
        .HasOne(s => s.Plan)
        .WithMany(p => p.Subscriptions)
        .HasForeignKey(s => s.PlanId)
        .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
