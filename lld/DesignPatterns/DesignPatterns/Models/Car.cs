// Liskov Substitution Principle - L in SOLID


// Liskov Substitution Principle - L in SOLID

using DesignPatterns.Models.Strategies;

namespace DesignPatterns.Models;

internal class Car : EngineVehicle
{
    public Car() : base("Car")
    {

    }

    public override int TotalWheels { get => 4; protected set => base.TotalWheels = value; }

    public override void Move()
    {
        base.Move();
    }
}
