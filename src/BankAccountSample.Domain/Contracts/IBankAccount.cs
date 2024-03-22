namespace BankAccountSample.Domain.Contracts
{
    public interface IBankAccount
    {
        long Id { get; set; }
        string Description { get; set; }
        DateTime Date { get; set; }
        double Value { get; set; }
        bool Detached { get; set; }
        string Status { get; set; }
    }
}