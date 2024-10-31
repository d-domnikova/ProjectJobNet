﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Shared.SubscriptionPlan
{
    public class SubscriptionPlanDto
    {
        public Guid Id { get; set; }
        public string PlanName { get; set; }
        public decimal Price { get; set; }
        public int Duration { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
