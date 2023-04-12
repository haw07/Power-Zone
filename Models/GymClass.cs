using System.ComponentModel.DataAnnotations;
using System.Data.SQLite;
namespace PowerZone.Models;

public class GymClass{
    [Key]
    public string? Id{get;set;}
    public string? name{get; set;}
    public string? CoachName{get;set;}
    public string? StartTime{get;set;}
    public string? EndTime{get;set;}
    public string? day{get;set;}
}