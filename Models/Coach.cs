using System.ComponentModel.DataAnnotations;
namespace PowerZone.Models;

public class Coach{
    [Key]
    public string? Id{get;set;}
    public string? firstName{get;set;}
    public string? lastName{get;set;}

    public string? img{get;set;}
    public string? email{get;set;}
    public string? role{get;set;}
}