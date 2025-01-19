using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Eduverse
{
    [Table("student")]
    public class Student
    {
        [Column("StudentID")]
        [Key]
        public int Id { get; set; }

        [Column("StudentName")]
        public string Name { get; set; }

        [Column("StudentEmail")]
        public string Email { get; set; }

        [Column("StudentMobileNo")]
        public string Mobile { get; set; }
    }
}