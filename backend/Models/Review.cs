
namespace hotel_booking_api.Models
{
    public class Review
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int PropertyId { get; set; }
        public int Rating { get; set; }
        public string? Comment { get; set; }
    }
}
