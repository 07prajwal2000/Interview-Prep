using DesignPatterns.Models;
using DesignPatterns.Models.Strategies;

namespace DesignPatterns.Patterns;

internal class SportBike : MotorBike
{
    private readonly BaseVehicleStrategy vehicleStrategy;

    public SportBike(BaseVehicleStrategy vehicleStrategy)
    {
        this.vehicleStrategy = vehicleStrategy;
    }

    public override void Move()
    {
        base.Move();
        vehicleStrategy.Drive();
    }
}

internal class FordRaptorCar : Car
{
    private readonly BaseVehicleStrategy vehicleStrategy;

    public FordRaptorCar(BaseVehicleStrategy vehicleStrategy)
    {
        this.vehicleStrategy = vehicleStrategy;
    }

    public override void Move()
    {
        base.Move();
        vehicleStrategy.Drive();
    }
}

internal class StrategyPattern
{
    public void Run()
    {
        var vehicles = new List<Vehicle>();
        vehicles.Add(new SportBike(new SportVehicleStrategy()));
        vehicles.Add(new FordRaptorCar(new OffRoadVehicleStrategy()));
        foreach (var vehicle in vehicles)
        {
            vehicle.Move();
        }
    }
}
