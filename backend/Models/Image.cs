
namespace hotel_booking_api.Models
{
    public class Image
    {
        public int Id { get; set; }
        public int PropertyId { get; set; }
        public string Url { get; set; } = "";
    }
}
