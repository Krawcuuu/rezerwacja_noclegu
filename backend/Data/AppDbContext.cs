
using Microsoft.EntityFrameworkCore;
using hotel_booking_api.Models;

namespace hotel_booking_api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) { }

        public DbSet<User> Users => Set<User>();
        public DbSet<Property> Properties => Set<Property>();
        public DbSet<Reservation> Reservations => Set<Reservation>();
        public DbSet<Review> Reviews => Set<Review>();
        public DbSet<Image> Images => Set<Image>();
    }
}
