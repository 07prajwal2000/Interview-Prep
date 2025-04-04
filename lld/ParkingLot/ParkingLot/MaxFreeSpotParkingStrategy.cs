namespace ParkingLot;

public class MaxFreeSpotParkingStrategy : IParkingStrategy
{
    private readonly VehicleType[][][] slots;

    public MaxFreeSpotParkingStrategy(VehicleType[][][] slots)
    {
        this.slots = slots;
    }

    public ParkingLocation Park(VehicleType vehicleType)
    {
        for (int i = 0; i < slots.Length; i++)
        {
            for (int j = 0; j < slots[i].Length; j++)
            {
                for (int k = 0; k < slots[i][j].Length; k++)
                {
                    var slot = slots[i][j][k];
                    if (slot == vehicleType) return new ParkingLocation
                    {
                        Floor = i,
                        Row = j,
                        Column = k
                    };
                }
            }
        }
        return new ParkingLocation();
    }
}
