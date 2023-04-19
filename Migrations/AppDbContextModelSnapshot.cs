﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using power_zone.Data;

#nullable disable

namespace power_zone.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.5");

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex");

                    b.ToTable("AspNetRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ClaimType")
                        .HasColumnType("TEXT");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("TEXT");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ClaimType")
                        .HasColumnType("TEXT");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("TEXT");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("TEXT");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("RoleId")
                        .HasColumnType("TEXT");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<string>("Value")
                        .HasColumnType("TEXT");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("power_zone.Models.Booking", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<string>("className")
                        .HasColumnType("TEXT");

                    b.Property<string>("coachName")
                        .HasColumnType("TEXT");

                    b.Property<string>("day")
                        .HasColumnType("TEXT");

                    b.Property<string>("endTime")
                        .HasColumnType("TEXT");

                    b.Property<string>("startTime")
                        .HasColumnType("TEXT");

                    b.Property<string>("userName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Bookings");
                });

            modelBuilder.Entity("power_zone.Models.GymClass", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<string>("CoachName")
                        .HasColumnType("TEXT");

                    b.Property<string>("EndTime")
                        .HasColumnType("TEXT");

                    b.Property<string>("StartTime")
                        .HasColumnType("TEXT");

                    b.Property<int>("capacity")
                        .HasColumnType("INTEGER");

                    b.Property<string>("day")
                        .HasColumnType("TEXT");

                    b.Property<string>("name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("GymClasses");

                    b.HasData(
                        new
                        {
                            Id = "1",
                            CoachName = "Adam Smith",
                            EndTime = "14:00",
                            StartTime = "10:00",
                            capacity = 5,
                            day = "Monday",
                            name = "weight loose"
                        },
                        new
                        {
                            Id = "2",
                            CoachName = "Adam Smith",
                            EndTime = "18:00",
                            StartTime = "16:00",
                            capacity = 6,
                            day = "Monday",
                            name = "Karate"
                        },
                        new
                        {
                            Id = "3",
                            CoachName = "Adam Smith",
                            EndTime = "20:00",
                            StartTime = "18:00",
                            capacity = 1,
                            day = "Monday",
                            name = "yoga"
                        },
                        new
                        {
                            Id = "4",
                            CoachName = "Adam Smith",
                            EndTime = "23:00",
                            StartTime = "21:00",
                            capacity = 0,
                            day = "Monday",
                            name = "boxing"
                        },
                        new
                        {
                            Id = "5",
                            CoachName = "Adam Smith",
                            EndTime = "17:00",
                            StartTime = "14:00",
                            capacity = 2,
                            day = "Tuesday",
                            name = "Karate"
                        },
                        new
                        {
                            Id = "6",
                            CoachName = "Adam Smith",
                            EndTime = "20:00",
                            StartTime = "18:00",
                            capacity = 5,
                            day = "Tuesday",
                            name = "boxing"
                        },
                        new
                        {
                            Id = "7",
                            CoachName = "Adam Smith",
                            EndTime = "22:00",
                            StartTime = "20:00",
                            capacity = 5,
                            day = "Tuesday",
                            name = "yoga"
                        },
                        new
                        {
                            Id = "8",
                            CoachName = "James Rachel",
                            EndTime = "15:00",
                            StartTime = "10:00",
                            capacity = 5,
                            day = "Wednesday",
                            name = "weight loose"
                        },
                        new
                        {
                            Id = "9",
                            CoachName = "James Rachel",
                            EndTime = "19:00",
                            StartTime = "16:00",
                            capacity = 5,
                            day = "Wednesday",
                            name = "body building"
                        },
                        new
                        {
                            Id = "10",
                            CoachName = "James Rachel",
                            EndTime = "23:00",
                            StartTime = "20:30",
                            capacity = 5,
                            day = "Wednesday",
                            name = "yoga"
                        },
                        new
                        {
                            Id = "11",
                            CoachName = "Abbey Mcvay",
                            EndTime = "17:00",
                            StartTime = "14:00",
                            capacity = 5,
                            day = "Thursday",
                            name = "weight loose"
                        },
                        new
                        {
                            Id = "12",
                            CoachName = "Abbey Mcvay",
                            EndTime = "22:00",
                            StartTime = "18:00",
                            capacity = 5,
                            day = "Thursday",
                            name = "boxing"
                        },
                        new
                        {
                            Id = "13",
                            CoachName = "Abbey Mcvay",
                            EndTime = "22:00",
                            StartTime = "18:00",
                            capacity = 10,
                            day = "Thursday",
                            name = "body building"
                        },
                        new
                        {
                            Id = "14",
                            CoachName = "Nicole Dahlberg",
                            EndTime = "13:00",
                            StartTime = "10:00",
                            capacity = 12,
                            day = "Friday",
                            name = "boxing"
                        },
                        new
                        {
                            Id = "15",
                            CoachName = "Nicole Dahlberg",
                            EndTime = "19:00",
                            StartTime = "16:00",
                            capacity = 20,
                            day = "Friday",
                            name = "body building"
                        },
                        new
                        {
                            Id = "16",
                            CoachName = "Nicole Dahlberg",
                            EndTime = "23:00",
                            StartTime = "22:00",
                            capacity = 5,
                            day = "Friday",
                            name = "weight loose"
                        },
                        new
                        {
                            Id = "17",
                            CoachName = "Jimmy Pratt",
                            EndTime = "15:30",
                            StartTime = "14:00",
                            capacity = 5,
                            day = "Saturday",
                            name = "yoga"
                        },
                        new
                        {
                            Id = "18",
                            CoachName = "Jimmy Pratt",
                            EndTime = "17:00",
                            StartTime = "16:00",
                            capacity = 5,
                            day = "Saturday",
                            name = "boxing"
                        },
                        new
                        {
                            Id = "19",
                            CoachName = "Jimmy Pratt",
                            EndTime = "22:00",
                            StartTime = "18:00",
                            capacity = 5,
                            day = "Saturday",
                            name = "boxing"
                        },
                        new
                        {
                            Id = "20",
                            CoachName = "Mickeal Anderson",
                            EndTime = "13:30",
                            StartTime = "10:00",
                            capacity = 10,
                            day = "Sunday",
                            name = "body building"
                        },
                        new
                        {
                            Id = "21",
                            CoachName = "Mickeal Anderson",
                            EndTime = "20:00",
                            StartTime = "16:00",
                            capacity = 6,
                            day = "Sunday",
                            name = "Karate"
                        },
                        new
                        {
                            Id = "22",
                            CoachName = "Mickeal Anderson",
                            EndTime = "23:00",
                            StartTime = "21:00",
                            capacity = 12,
                            day = "Sunday",
                            name = "weight loose"
                        });
                });

            modelBuilder.Entity("power_zone.Models.User", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("INTEGER");

                    b.Property<float>("BMI")
                        .HasColumnType("REAL");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("INTEGER");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("TEXT");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("TEXT");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("INTEGER");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("TEXT");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("INTEGER");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<string>("address")
                        .HasColumnType("TEXT");

                    b.Property<string>("classes")
                        .HasColumnType("TEXT");

                    b.Property<float>("height")
                        .HasColumnType("REAL");

                    b.Property<string>("imgURL")
                        .HasColumnType("TEXT");

                    b.Property<string>("lastName")
                        .HasColumnType("TEXT");

                    b.Property<float>("max_bench_press")
                        .HasColumnType("REAL");

                    b.Property<float>("max_deadlift")
                        .HasColumnType("REAL");

                    b.Property<float>("max_squat")
                        .HasColumnType("REAL");

                    b.Property<string>("password")
                        .HasColumnType("TEXT");

                    b.Property<float>("progress")
                        .HasColumnType("REAL");

                    b.Property<string>("role")
                        .HasColumnType("TEXT");

                    b.Property<string>("trainees")
                        .HasColumnType("TEXT");

                    b.Property<int>("verificationPin")
                        .HasColumnType("INTEGER");

                    b.Property<float>("weight")
                        .HasColumnType("REAL");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex");

                    b.ToTable("AspNetUsers", (string)null);

                    b.HasData(
                        new
                        {
                            Id = "1",
                            AccessFailedCount = 0,
                            BMI = 0f,
                            ConcurrencyStamp = "3b8a8ad1-00c1-445a-9a45-242faad309fc",
                            Email = "coach01@powerzone.com",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "ab93050c-77bf-4a19-9cc5-bc79b0468669",
                            TwoFactorEnabled = false,
                            UserName = "James",
                            address = "123 Main St",
                            classes = "9,10",
                            height = 0f,
                            imgURL = "https://img.freepik.com/premium-photo/portrait-happy-gym-trainer-holding-clipboard_107420-30393.jpg?w=2000",
                            lastName = "Rachel",
                            max_bench_press = 0f,
                            max_deadlift = 0f,
                            max_squat = 0f,
                            password = "james1",
                            progress = 0f,
                            role = "Coach",
                            trainees = "7",
                            verificationPin = 0,
                            weight = 0f
                        },
                        new
                        {
                            Id = "2",
                            AccessFailedCount = 0,
                            BMI = 0f,
                            ConcurrencyStamp = "ba8aafa6-99aa-48f5-a10e-c1a68486494b",
                            Email = "coach02@powerzone.com",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "752c01b7-f179-4db2-bfdd-83b30263ebda",
                            TwoFactorEnabled = false,
                            UserName = "Adam",
                            address = "24 Main Street",
                            classes = "1,2,3,4,5,6,7",
                            height = 0f,
                            imgURL = "https://media.istockphoto.com/id/1369509413/photo/shot-of-a-handsome-young-man-taking-a-break-during-his-workout.jpg?b=1&s=170667a&w=0&k=20&c=MC2um7AEeVfi6Omt4i4ygVzO42upQt4jvI32tHgt0OE=",
                            lastName = "Smith",
                            max_bench_press = 0f,
                            max_deadlift = 0f,
                            max_squat = 0f,
                            password = "adam2",
                            progress = 0f,
                            role = "Coach",
                            trainees = "7",
                            verificationPin = 0,
                            weight = 0f
                        },
                        new
                        {
                            Id = "3",
                            AccessFailedCount = 0,
                            BMI = 0f,
                            ConcurrencyStamp = "535ac01f-2315-4dcd-b825-553a303ff952",
                            Email = "coach03@powerzone.com",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "c986f5a2-39a8-4d7a-bc3b-70279715d1eb",
                            TwoFactorEnabled = false,
                            UserName = "Abbey",
                            address = "123 Main S",
                            classes = "11,12,13",
                            height = 0f,
                            imgURL = "https://media.istockphoto.com/id/675213138/photo/smiling-trainer-holding-clipboard.jpg?s=612x612&w=0&k=20&c=irFL9mh56DGBruHtTJQtUfanzAOoQCw9CHPVEVqPKhc=",
                            lastName = "Mcvay",
                            max_bench_press = 0f,
                            max_deadlift = 0f,
                            max_squat = 0f,
                            password = "abbey3",
                            progress = 0f,
                            role = "Coach",
                            trainees = "7",
                            verificationPin = 0,
                            weight = 0f
                        },
                        new
                        {
                            Id = "4",
                            AccessFailedCount = 0,
                            BMI = 0f,
                            ConcurrencyStamp = "cbec3c2b-cefe-4214-aaa6-1da8df80b66e",
                            Email = "coach04@powerzone.com",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "065bbe62-5f23-4a6c-b1d2-a9efdf399f12",
                            TwoFactorEnabled = false,
                            UserName = "Nicole",
                            address = "33 Street",
                            classes = "14,15,16",
                            height = 0f,
                            imgURL = "https://media.istockphoto.com/id/635742500/photo/personal-trainer-with-clipboard-showing-thumb-up-in-gym.jpg?s=612x612&w=0&k=20&c=g3w-6fFlo47Crqwa5NJh9ZfQf5knWlGsSJY5AAwyAf0=",
                            lastName = "Dahlberg",
                            max_bench_press = 0f,
                            max_deadlift = 0f,
                            max_squat = 0f,
                            password = "nicole4",
                            progress = 0f,
                            role = "Coach",
                            trainees = "8",
                            verificationPin = 0,
                            weight = 0f
                        },
                        new
                        {
                            Id = "5",
                            AccessFailedCount = 0,
                            BMI = 0f,
                            ConcurrencyStamp = "090c3480-b215-485b-a875-eb9da80f625c",
                            Email = "coach05@powerzone.com",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "49793f62-b11a-43cf-ab60-a5d88d03cbad",
                            TwoFactorEnabled = false,
                            UserName = "Jimmy",
                            address = "32 St",
                            classes = "17,18,19",
                            height = 0f,
                            imgURL = "https://media.istockphoto.com/id/1018043738/photo/portrait-of-chinese-personal-trainer-in-gym.jpg?s=612x612&w=0&k=20&c=BpuYao5G3qr5SG7IUq15CESYHxunuvz66qfnDKJfX9s=",
                            lastName = "Pratt",
                            max_bench_press = 0f,
                            max_deadlift = 0f,
                            max_squat = 0f,
                            password = "jimmy5",
                            progress = 0f,
                            role = "Coach",
                            trainees = "8",
                            verificationPin = 0,
                            weight = 0f
                        },
                        new
                        {
                            Id = "6",
                            AccessFailedCount = 0,
                            BMI = 0f,
                            ConcurrencyStamp = "cc509b99-55aa-41eb-a3f0-70e7c1981dbd",
                            Email = "coach06@powerzone.com",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "77172b88-67ca-4644-8260-f218cf7d42c5",
                            TwoFactorEnabled = false,
                            UserName = "Mickeal",
                            address = "22 Main St",
                            classes = "20,21,22",
                            height = 0f,
                            imgURL = "https://media.istockphoto.com/id/925188400/photo/happy-fitness-instructor-with-training-plan-in-a-health-club.jpg?s=612x612&w=0&k=20&c=XK4wm54qQ81iA3KZ25f4U5ByUS7UuofHE4NdQopsZAc=",
                            lastName = "Anderson",
                            max_bench_press = 0f,
                            max_deadlift = 0f,
                            max_squat = 0f,
                            password = "mickeal6",
                            progress = 0f,
                            role = "Coach",
                            trainees = "8",
                            verificationPin = 0,
                            weight = 0f
                        },
                        new
                        {
                            Id = "7",
                            AccessFailedCount = 0,
                            BMI = 0f,
                            ConcurrencyStamp = "2459c9e5-232b-48e7-b957-b4e57d4c2dcf",
                            Email = "trainee01@powerzone.com",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "bbe95360-2d8d-42a0-acba-17597453b132",
                            TwoFactorEnabled = false,
                            UserName = "Joudy",
                            classes = "1,2,3,4,5,6,7,8,9,10",
                            height = 0f,
                            lastName = "Ashkar",
                            max_bench_press = 0f,
                            max_deadlift = 0f,
                            max_squat = 0f,
                            password = "joudy8",
                            progress = 0f,
                            verificationPin = 0,
                            weight = 0f
                        },
                        new
                        {
                            Id = "8",
                            AccessFailedCount = 0,
                            BMI = 0f,
                            ConcurrencyStamp = "5b066e50-5064-4fe0-9202-462294c4d14e",
                            Email = "trainee02@powerzone.com",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "ae90876d-a018-44e8-bb06-d630b62928ac",
                            TwoFactorEnabled = false,
                            UserName = "Nour",
                            classes = "14,15,16,17,18,19,20,21,22",
                            height = 0f,
                            lastName = "Obeid",
                            max_bench_press = 0f,
                            max_deadlift = 0f,
                            max_squat = 0f,
                            password = "Nour8",
                            progress = 0f,
                            verificationPin = 0,
                            weight = 0f
                        },
                        new
                        {
                            Id = "9",
                            AccessFailedCount = 0,
                            BMI = 0f,
                            ConcurrencyStamp = "118dfeb4-45c5-4ede-999b-6d041982d12d",
                            Email = "trainee03@powerzone.com",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "6760771e-ebd5-412e-a891-f0688527c123",
                            TwoFactorEnabled = false,
                            UserName = "Alex",
                            classes = "14",
                            height = 0f,
                            lastName = "Smith",
                            max_bench_press = 0f,
                            max_deadlift = 0f,
                            max_squat = 0f,
                            password = "Alex9",
                            progress = 0f,
                            verificationPin = 0,
                            weight = 0f
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("power_zone.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("power_zone.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("power_zone.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("power_zone.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
