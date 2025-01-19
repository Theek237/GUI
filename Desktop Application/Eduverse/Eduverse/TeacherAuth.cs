using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Eduverse
{
    [Table("teacher_auth")]

    internal class TeacherAuth
    {
        [Column("auth_id")]
        [Key]
        public int AuthId { get; set; }

        [Column("teacher_id")]
        public int Id { get; set; }

        [Column("email")]
        public string Email { get; set; }

        [Column("password_hash")]
        public string HPassword { get; set; }
    }
}
