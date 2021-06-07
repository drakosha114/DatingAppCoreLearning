using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace API.Controllers
{

    public class AccountController : BaseApiController
    {
        public AccountController(DataContext context, ITokenService tokenService) : base()
        {
            _context = context;
            _tokenService = tokenService;
        }

        private readonly DataContext _context;

        private readonly ITokenService _tokenService;

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<ActionResult<UserDTO>> Register(RegisterDTO registerData)
        {

            if (await HasUserExistCheck(registerData.UserName)) 
            {
                return BadRequest("User has exist!");
            }

            using var hmac = new HMACSHA512();

            var user = new AppUser
            {
                UserName = registerData.UserName.ToLower(),
                PasswordHasn = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerData.Password)),
                PaswordSalt = hmac.Key
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return new UserDTO
            {
                UserName = user.UserName,
                Token = _tokenService.GetToken(user)
            };
        }


        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDTO) {

            var user = await _context.Users.SingleOrDefaultAsync(x => x.UserName == loginDTO.UserName);

            if (user == null) {
                return Unauthorized("User or password incorrect");
            }

            using var hmac = new HMACSHA512(user.PaswordSalt);

            var passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDTO.Password));

            for (var i = 0; i < passwordHash.Length; i +=1) {

                if (passwordHash[i] != user.PasswordHasn[i]) {
                    return Unauthorized("User or password incorrect");
                }
            }

            return new UserDTO
            {
                UserName = user.UserName,
                Token = _tokenService.GetToken(user)
            };
        }

        private async Task<bool> HasUserExistCheck(string username) {
            return await _context.Users.AnyAsync(x => x.UserName == username.ToLower());
        }


    }
}
