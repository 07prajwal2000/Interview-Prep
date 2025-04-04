namespace ParkingLot;

public class ParkingLocation
{
    public int Floor { get; set; } = -1;
    public int Row { get; set; }
    public int Column { get; set; }
    public string VehicleNumber { get; set; }
    public string TicketId { get; set; }
    public VehicleType VehicleType { get; set; }
}