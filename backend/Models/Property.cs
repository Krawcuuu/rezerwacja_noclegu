
using System.ComponentModel.DataAnnotations;

namespace hotel_booking_api.Models
{
    public class Property
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; } = "";
        public string? Description { get; set; }
        public string? Location { get; set; }
        public decimal Price { get; set; }
    }
}
