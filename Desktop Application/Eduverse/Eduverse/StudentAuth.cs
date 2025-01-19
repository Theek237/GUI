using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Eduverse
{
    [Table("student_auth")]

    internal class StudentAuth
    {
        [Column("auth_id")]
        [Key]
        public int AuthId { get; set; }

        [Column("student_id")]
        public int Id { get; set; }

        [Column("email")]
        public string Email { get; set; }

        [Column("password_hash")]
        public string HPassword { get; set; }
    }
}
