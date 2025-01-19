using Microsoft.EntityFrameworkCore;

namespace Eduverse
{
    internal class DataContext : DbContext
    {
        public DbSet<Student> Students { get; set; }
        public DbSet<StudentAuth> StudentAuths { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<TeacherAuth> TeacherAuths { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(
                "server=localhost;port=3306;database=lmsdb;user=root;password=password",
                new MySqlServerVersion(new Version(8, 0, 29))
            );
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Student>()
                .ToTable("student");
            modelBuilder.Entity<StudentAuth>()
                .ToTable("student_auth");
            modelBuilder.Entity<Teacher>()
                .ToTable("teacher");
            modelBuilder.Entity<TeacherAuth>()
                .ToTable("teacher_auth");
        }
    }
}