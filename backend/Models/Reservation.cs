
using System.ComponentModel.DataAnnotations;

namespace hotel_booking_api.Models
{
    public class Reservation
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int PropertyId { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime DateTo { get; set; }
        public int Guests { get; set; }
    }
}
