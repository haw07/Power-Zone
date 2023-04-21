using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace power_zone.Models;

public class GymClass
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public string? Id { get; set; }
    public string? name { get; set; }
    public string? CoachName { get; set; }
    public string? StartTime { get; set; }
    public string? EndTime { get; set; }
    public string? day { get; set; }
    public int capacity { get; set; }
}