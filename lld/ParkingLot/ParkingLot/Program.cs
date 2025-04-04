using ParkingLot;

VehicleType[][][] parkingSlots = [
    [ // floor 0
        [VehicleType.FourWheeler, VehicleType.FourWheeler, VehicleType.TwoWheeler, VehicleType.TwoWheeler],
        [VehicleType.TwoWheeler, VehicleType.FourWheeler, VehicleType.TwoWheeler, VehicleType.Inactive],
        [0, VehicleType.TwoWheeler, VehicleType.TwoWheeler, VehicleType.TwoWheeler],
        [VehicleType.FourWheeler, VehicleType.FourWheeler, VehicleType.FourWheeler, VehicleType.Inactive]
    ],
];

var parkingLot = new ParkingLotBuilding();
parkingLot.Init(new Helper(), parkingSlots);

var parkingSpotId = parkingLot.Park(VehicleType.TwoWheeler, "bh234", "tkt4534", ParkingStrategy.Strategy_0);
Console.WriteLine("Parking Spot ID {0}", parkingSpotId);

parkingSpotId = parkingLot.SearchVehicle("bh234"); // tkt4534
Console.WriteLine("Parking Spot ID for bh234: {0}", parkingSpotId);

var freeSpots = parkingLot.GetFreeSpots(0, VehicleType.TwoWheeler);
parkingLot.RemoveVehicle("0-0-2");

Console.WriteLine("Free spots before deletion {0}", freeSpots);

freeSpots = parkingLot.GetFreeSpots(0, VehicleType.TwoWheeler);

Console.WriteLine("Free spots after deletion {0}", freeSpots);