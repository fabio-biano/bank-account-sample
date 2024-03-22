namespace BankAccountSample.Api.Models
{
    public class BankAccountModel : IBankAccount
    {
        public long Id { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public double Value { get; set; }
        public bool Detached { get; set; }
        public string Status { get; set; }
    }
}