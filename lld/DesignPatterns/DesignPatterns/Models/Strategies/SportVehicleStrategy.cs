namespace DesignPatterns.Models.Strategies;

internal class SportVehicleStrategy : BaseVehicleStrategy
{
    public override void Drive()
    {
        Console.WriteLine("Driving a Sport vehicle with 100MPH");
    }
}

internal class NormalVehicleStrategy : BaseVehicleStrategy
{
    public override void Drive()
    {
        Console.WriteLine("Driving a normal car happily and peacefully");
    }
}