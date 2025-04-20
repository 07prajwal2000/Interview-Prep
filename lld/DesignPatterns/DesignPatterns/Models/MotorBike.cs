// Liskov Substitution Principle - L in SOLID


// Liskov Substitution Principle - L in SOLID

using DesignPatterns.Models.Strategies;

namespace DesignPatterns.Models;

internal class MotorBike : EngineVehicle
{
    internal MotorBike() : base("Motor Bike")
    {

    }

    public override void Move()
    {
        base.Move();
    }
}
