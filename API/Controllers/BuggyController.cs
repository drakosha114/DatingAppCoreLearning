using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        public BuggyController(DataContext context)
        {
            Context = context;
        }

        private DataContext Context { get; }

        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSeecret() {
            return "Secret text";
        }

        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound()
        {
            var user = Context.Users.Find(-1);

            if (user == null) {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpGet("internal-error")]
        public ActionResult<string> GetInternalError() {

            var user = Context.Users.Find(-1);

            var stringToReturn = user.ToString();

            return stringToReturn;
        }


        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest()
        {
            return BadRequest("Bad request result");
        }

        [HttpPost("validation-error")]
        public ActionResult<RegisterDto> GetValidationError(RegisterDto registerData) {

            return Ok(registerData);
        }
    }
}
