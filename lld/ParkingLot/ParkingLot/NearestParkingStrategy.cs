namespace ParkingLot;

public class NearestParkingStrategy : IParkingStrategy
{
    private readonly VehicleType[][][] slots;
    private readonly FloorCount[] floorCount;

    public NearestParkingStrategy(VehicleType[][][] slots, FloorCount[] floorCount)
    {
        this.slots = slots;
        this.floorCount = floorCount;
    }

    public ParkingLocation Park(VehicleType vehicleType)
    {
        int index = 0, maxFreeSpots = 0;

        for (int i = 0; i < floorCount.Length; i++)
        {
            if (vehicleType == VehicleType.TwoWheeler && floorCount[i].TwoWheelerCount > maxFreeSpots)
            {
                maxFreeSpots = floorCount[i].TwoWheelerCount;
                index = i;
            }
            else if (vehicleType == VehicleType.FourWheeler && floorCount[i].FourWheelerCount > maxFreeSpots)
            {
                maxFreeSpots = floorCount[i].FourWheelerCount;
                index = i;
            }
        }

        for (int i = 0; i < slots[index].Length; i++)
        {
            for (int j = 0; j < slots[index][i].Length; j++)
            {
                var cur = slots[index][i][j];

                if (cur != vehicleType) continue;

                return new ParkingLocation
                {
                    Floor = index,
                    Row = i,
                    Column = j
                };
            }
        }

        return new ParkingLocation();
    }
}