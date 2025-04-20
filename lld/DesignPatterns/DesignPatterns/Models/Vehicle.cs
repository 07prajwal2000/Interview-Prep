// Liskov Substitution Principle - L in SOLID

namespace DesignPatterns.Models;

public class Vehicle
{
    private readonly string vehicleType;
    public virtual int TotalWheels { get; protected set; } = 2;

    public Vehicle(string vehicleType = "vehicle")
    {
        this.vehicleType = vehicleType;
    }

    public virtual void Move()
    {
        Console.WriteLine($"{vehicleType} is moving");
    }

    public virtual void Stop()
    {
        Console.WriteLine($"{vehicleType} stopped");
    }
}
