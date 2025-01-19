using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Eduverse
{
    [Table("teacher")]
    public class Teacher
    {
        [Column("TeacherID")]
        [Key]
        public int Id { get; set; }

        [Column("TeacherName")]
        public string Name { get; set; }

        [Column("TeacherEmail")]
        public string Email { get; set; }

        [Column("TeacherMobileNo")]
        public string Mobile { get; set; }
    }
}