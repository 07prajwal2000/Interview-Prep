// Liskov Substitution Principle - L in SOLID

using DesignPatterns.Models;

namespace DesignPatterns.Solid;

public class LSP
{
    public void Run()
    {
        Console.WriteLine("Running Liskov Substitution Principle");
        var vehiclesList = new List<Vehicle>();
        vehiclesList.Add(new Car());
        vehiclesList.Add(new MotorBike());
        vehiclesList.Add(new Bicycle());
        foreach (var vehicle in vehiclesList)
        {
            vehicle.Move();
            vehicle.Stop();
            Console.WriteLine($"Vehicle has {vehicle.TotalWheels} wheels");
        }
    }
}
