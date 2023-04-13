using Microsoft.AspNetCore.Identity;
namespace power_zone.Models;

public class User : IdentityUser
{
    public string? lastName{get;set;}
    public string? gender{get;set;}
    public string? address{get;set;}
    public string? imgURL{get;set;}
}