// Liskov Substitution Principle - L in SOLID


// Liskov Substitution Principle - L in SOLID

namespace DesignPatterns.Models;

public class EngineVehicle : Vehicle
{
    public EngineVehicle(string vehicleType) : base(vehicleType)
    {
        
    }
    public virtual bool HasEngine() => true;
}
