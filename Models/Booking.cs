namespace power_zone.Models;
using System.ComponentModel.DataAnnotations;
public class Booking{
    [Key]
    public string? Id{get;set;}
    public string? username{get;set;}
    public string? date{get;set;}
    public string? duration{get;set;}
    public string? className{get;set;}

}