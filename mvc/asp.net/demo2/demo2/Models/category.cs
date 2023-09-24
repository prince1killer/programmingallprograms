using System.ComponentModel.DataAnnotations;
namespace demo2.Models
{
    public class category
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string DisplayOrder { get; set; }
        public DateTime CreatedDateTime { get; set; } = DateTime.Now;
    }
}
