﻿using BLL.Services.Abstractins;
using BLL.Shared.Resume;
using Microsoft.AspNetCore.Mvc;

namespace ProjectJobNet.Controllers
{
    [Route("api/resumes")]
    [ApiController]
    public class ResumeController : ControllerBase
    {
        private readonly IResumeService _resumeService;

        public ResumeController(IResumeService resumeService)
        {
            _resumeService = resumeService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ResumeDto>>> GetAllResumes()
        {
            var resumes = await _resumeService.GetAllResumesAsync();
            return Ok(resumes);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ResumeDto>> GetResumeById(Guid id)
        {
            var resume = await _resumeService.GetResumeByIdAsync(id);
            if (resume == null)
                return NotFound();

            return Ok(resume);
        }

        [HttpPost]
        public async Task<IActionResult> AddResume([FromBody] CreateResumeDto createResumeDto)
        {
            await _resumeService.AddResumeAsync(createResumeDto);
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateResume(Guid id, [FromBody] CreateResumeDto updateResumeDto)
        {
            await _resumeService.UpdateResumeAsync(id, updateResumeDto);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteResume(Guid id)
        {
            await _resumeService.DeleteResumeAsync(id);
            return NoContent();
        }
    }
}
