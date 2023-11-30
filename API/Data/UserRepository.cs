using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace API.Data;

public class UserRepository : IUserRepository
{
    private readonly DataContext _context;
    private readonly IMapper _mapper;

    public UserRepository(DataContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public void Update(AppUser user)
    {
        _context.Entry(user).State = EntityState.Modified;
    }

    public async Task<bool> SaveAllAsync()
    {
        return await _context.SaveChangesAsync() > 0;
    }

    public async Task<IEnumerable<AppUser>> GetUsersAsync()
    {
        return await _context.Users.Include(p => p.Photos).ToListAsync();
    }

    public async Task<AppUser> GetUserByIdAsync(int id)
    {
        return await _context.Users.FindAsync(id);
    }

    public async Task<AppUser> GetUserByNameAsync(string username)
    {
        return await _context.Users.Include(p => p.Photos).SingleOrDefaultAsync(u => u.UserName == username);
    }

    public async Task<IEnumerable<MemberDto>> GetMembersAsync()
    {
        return await _context.Users.ProjectTo<MemberDto>(_mapper.ConfigurationProvider).ToListAsync();
    }

    public async Task<MemberDto> GetMemberByIdAsync(int id)
    {
        return await _context.Users.Where(u => u.Id == id).Include(p => p.Photos).ProjectTo<MemberDto>(_mapper.ConfigurationProvider).SingleOrDefaultAsync();
    }

    public async Task<MemberDto> GetMemberByNameAsync(string username)
    {
        return await _context.Users.Where(u => u.UserName == username).Include(p => p.Photos).ProjectTo<MemberDto>(_mapper.ConfigurationProvider).SingleOrDefaultAsync();
    }
}