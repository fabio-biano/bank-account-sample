using BankAccountSample.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace BankAccountSample.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BankAccountController : ControllerBase
    {
        private readonly ILogger<BankAccountController> _logger;

        public BankAccountController(ILogger<BankAccountController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetBankAccount")]
        public IEnumerable<IBankAccount> Get()
        {
            return new List<IBankAccount>()
            {
                new BankAccountModel() { Id = 1, Date = DateTime.Now, Description = "Account 1", Detached = false, Status = "Active", Value = 100 },
                new BankAccountModel() { Id = 2, Date = DateTime.Now, Description = "Account 2", Detached = true, Status = "Canceled", Value = 1000 },
                new BankAccountModel() { Id = 3, Date = DateTime.Now, Description = "Account 3", Detached = false, Status = "Canceled", Value = 0 },
                new BankAccountModel() { Id = 4, Date = DateTime.Now, Description = "Account 4", Detached = true, Status = "Active", Value = 20000.98 },
                new BankAccountModel() { Id = 5, Date = DateTime.Now, Description = "Account 5", Detached = false, Status = "Active", Value = 438590.54 },
            };
        }
    }
}