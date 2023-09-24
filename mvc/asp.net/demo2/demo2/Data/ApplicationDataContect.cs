using DocumentFormat.OpenXml.Drawing.Diagrams;
using Microsoft.EntityFrameworkCore;

namespace demo2.Data
{
    public class ApplicationDataContect : DbContext
    {
        public ApplicationDataContect(DbContextOptions<ApplicationDataContect> options) : base(options)
        {

        }
        public DbSet<Category> Categories { get; set; }
    }
}
