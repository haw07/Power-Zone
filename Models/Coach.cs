using System.ComponentModel.DataAnnotations;
namespace power_zone.Models;

public class Coach{
    [Key]
    public string? Id{get;set;}
    public string? firstName{get;set;}
    public string? lastName{get;set;}

    public string? img{get;set;}
    public string? email{get;set;}
    public string? role{get;set;}
}