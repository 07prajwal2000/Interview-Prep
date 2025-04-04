namespace ParkingLot;

public class ParkingLotBuilding
{
    private VehicleType[][][] parkingSlots = null!;
    private IParkingStrategy maxFreeSpotStrategy;
    private IParkingStrategy nearestStrategy;
    private FloorCount[] freeSpotFloorCount;
    private Dictionary<string, ParkingLocation> parkedVehicleNumberMap = new();
    private Dictionary<string, ParkingLocation> ticketIdToLocationMap = new();
    private Dictionary<string, string> spotIdToVehicleNumber = new();

    public void Init(Helper helper, VehicleType[][][] parkingLot)
    {
        parkingSlots = parkingLot;
        freeSpotFloorCount = new FloorCount[parkingLot.Length];

        for (int i = 0; i < parkingLot.Length; i++)
        {
            int twoWheeler = 0, fourWheeler = 0;
            for (int j = 0; j < parkingLot[i].Length; j++)
            {
                for (int k = 0; k < parkingLot[i][j].Length; k++)
                {
                    if (parkingLot[i][j][k] == VehicleType.TwoWheeler) twoWheeler++;
                    else if (parkingLot[i][j][k] == VehicleType.FourWheeler) fourWheeler++;
                }
            }

            freeSpotFloorCount[i] = new FloorCount
            {
                TwoWheelerCount = twoWheeler,
                FourWheelerCount = fourWheeler
            };
        }

        maxFreeSpotStrategy = new MaxFreeSpotParkingStrategy(parkingLot);
        nearestStrategy = new NearestParkingStrategy(parkingLot, freeSpotFloorCount);
    }

    public string Park(VehicleType vehicleType, string vehicleNumber, string ticketId, ParkingStrategy parkingStrategy)
    {
        if (parkedVehicleNumberMap.ContainsKey(vehicleNumber)) return "ALREADY PARKED";

        IParkingStrategy strategy = parkingStrategy == ParkingStrategy.Strategy_0 ? nearestStrategy : maxFreeSpotStrategy;
        var parkingLocation = strategy.Park(vehicleType);

        if (parkingLocation.Floor == -1) return "FILLED";

        var spotId = $"{parkingLocation.Floor}-{parkingLocation.Row}-{parkingLocation.Column}";

        parkingLocation.TicketId = ticketId;
        parkingLocation.VehicleNumber = vehicleNumber;
        parkingLocation.VehicleType = vehicleType;

        parkingSlots[parkingLocation.Floor][parkingLocation.Row][parkingLocation.Column] = vehicleType;
        parkedVehicleNumberMap[vehicleNumber] = parkingLocation;
        ticketIdToLocationMap[ticketId] = parkingLocation;
        spotIdToVehicleNumber[spotId] = vehicleNumber;

        if (vehicleType == VehicleType.TwoWheeler) freeSpotFloorCount[parkingLocation.Floor].TwoWheelerCount--;
        else if (vehicleType == VehicleType.FourWheeler) freeSpotFloorCount[parkingLocation.Floor].FourWheelerCount--;

        return spotId;
    }

    public void RemoveVehicle(string spotId)
    {
        if (!spotIdToVehicleNumber.ContainsKey(spotId)) return;

        var vehicleNumber = spotIdToVehicleNumber[spotId];
        var location = parkedVehicleNumberMap[vehicleNumber];

        spotIdToVehicleNumber.Remove(spotId);
        parkedVehicleNumberMap.Remove(vehicleNumber);
        ticketIdToLocationMap.Remove(location.TicketId);
        parkingSlots[location.Floor][location.Row][location.Column] = location.VehicleType;
        
        if (location.VehicleType == VehicleType.TwoWheeler) freeSpotFloorCount[location.Floor].TwoWheelerCount++;
        else if (location.VehicleType == VehicleType.FourWheeler) freeSpotFloorCount[location.Floor].FourWheelerCount++;
    }

    public string SearchVehicle(string query)
    {
        Dictionary<string, ParkingLocation> db = query.StartsWith("tkt") ? ticketIdToLocationMap : parkedVehicleNumberMap;
        if (!db.ContainsKey(query)) return "NOT FOUND";

        var location = db[query];
        return $"{location.Floor}-{location.Row}-{location.Column}";
    }

    public int GetFreeSpots(int floor, VehicleType vehicleType)
    {
        if (floor < 0 || floor >= freeSpotFloorCount.Length) return -1;

        return vehicleType == VehicleType.TwoWheeler ? freeSpotFloorCount[floor].TwoWheelerCount : freeSpotFloorCount[floor].FourWheelerCount;
    }
}
