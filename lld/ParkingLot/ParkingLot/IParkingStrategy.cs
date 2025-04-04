namespace ParkingLot;

public interface IParkingStrategy
{
    ParkingLocation Park(VehicleType vehicleType);
}
