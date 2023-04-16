namespace power_zone.Models;
using System.ComponentModel.DataAnnotations;
public class Booking
{
    [Key]
    public string? Id { get; set; }
    public string? userName { get; set; }
    public string? coachName { get; set; }
    public string? day { get; set; }
    public string? startTime { get; set; }
    public string? endTime { get; set; }
    public string? className { get; set; }

}