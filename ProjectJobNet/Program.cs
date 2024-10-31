
using BLL.Services.Abstractins;
using BLL.Services;
using DAL.Abstractions;
using DAL.Context;
using DAL.Repos;
using Microsoft.EntityFrameworkCore;

namespace ProjectJobNet
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            //init
            //Реєстрація сервісів
            builder.Services.AddScoped<IUserService, UserService>();
            builder.Services.AddScoped<IJobService, JobService>();
            builder.Services.AddScoped<IRoleService, RoleService>();
            builder.Services.AddScoped<ICategoryService, CategoryService>();
            builder.Services.AddScoped<IResumeService, ResumeService>();
            builder.Services.AddScoped<IBlogPostService, BlogPostService>();
            builder.Services.AddScoped<IServiceService, ServiceService>();
            builder.Services.AddScoped<IReviewService, ReviewService>();
            builder.Services.AddScoped<ITagService, TagService>();
            builder.Services.AddScoped<ISubscriptionService, SubscriptionService>();
            builder.Services.AddScoped<ISubscriptionPlanService, SubscriptionPlanService>();
            builder.Services.AddScoped<IComplaintService, ComplaintService>();
            builder.Services.AddScoped<IWarningService, WarningService>();
            builder.Services.AddScoped<ILikedPostService, LikedPostService>();
            builder.Services.AddScoped<ISavedJobService, SavedJobService>();


            builder.Services.AddControllers();
            //Реєстрація UOW і репозиторіїв
            builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
            builder.Services.AddScoped<IUserRepository, UserRepository>();
            builder.Services.AddScoped<IJobRepository, JobRepository>();
            builder.Services.AddScoped<IRoleRepository, RoleRepository>();
            builder.Services.AddScoped<ICategoryRepository, CategoryRepository>();
            builder.Services.AddScoped<IResumeRepository, ResumeRepository>();
            builder.Services.AddScoped<IBlogPostRepository, BlogPostRepository>();
            builder.Services.AddScoped<IServiceRepository, ServiceRepository>();
            builder.Services.AddScoped<IReviewRepository, ReviewRepository>();
            builder.Services.AddScoped<ITagRepository, TagRepository>();
            builder.Services.AddScoped<IJobTagRepository, JobTagRepository>();
            builder.Services.AddScoped<IServiceTagRepository, ServiceTagRepository>();
            builder.Services.AddScoped<ISubscriptionRepository, SubscriptionRepository>();
            builder.Services.AddScoped<ISubscriptionPlanRepository, SubscriptionPlanRepository>();
            builder.Services.AddScoped<IComplaintRepository, ComplaintRepository>();
            builder.Services.AddScoped<IWarningRepository, WarningRepository>();
            builder.Services.AddScoped<ILikedPostRepository, LikedPostRepository>();
            builder.Services.AddScoped<ISavedJobRepository, SavedJobRepository>();

            builder.Services.AddEndpointsApiExplorer();


            builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            builder.Services.AddSwaggerGen();
           builder.Services.AddDbContext<JobNetContext>(options =>
           options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
