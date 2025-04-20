namespace DesignPatterns.Models.Strategies;

internal class OffRoadVehicleStrategy : BaseVehicleStrategy
{
    public override void Drive()
    {
        Console.WriteLine("Driving not on road, off the road");
    }
}