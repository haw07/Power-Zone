using Microsoft.AspNetCore.Identity;
namespace power_zone.Models;

public class User : IdentityUser
{
    public string? lastName { get; set; }
    public string? address { get; set; }
    public string? password { get; set; }
    public float progress { get; set; }
    public float height { get; set; }
    public float weight { get; set; }
    public float max_squat { get; set; }
    public float max_bench_press { get; set; }
    public float max_deadlift { get; set; }

    public List<string>? classes { get; set; }
    public string? role { get; set; }
    public List<string>? trainees { get; set; }

    public int verificationPin { get; set; }

    public string? gender { get; set; }

}