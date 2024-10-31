﻿using BLL.Shared.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services.Abstractins
{
    public interface IServiceService
    {
        Task<IEnumerable<ServiceDto>> GetAllServicesAsync();
        Task<ServiceDto> GetServiceByIdAsync(Guid id);
        Task AddServiceAsync(CreateServiceDto createServiceDto);
        Task UpdateServiceAsync(Guid id, CreateServiceDto updateServiceDto);
        Task DeleteServiceAsync(Guid id);
    }
}
