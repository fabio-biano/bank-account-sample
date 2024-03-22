import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '../views/bankAccount.html',
  styleUrls: ['../views/bankAccount.css']
})
export class BankAccountService {
  public bankAccounts?: IBankAccount[];

  constructor(http: HttpClient) {
    http.get<IBankAccount[]>(PROXY_CONFIG.target + '/BankAccount').subscribe(result => {
      this.bankAccounts = result;
    }, error => console.error(error));
  }

  title = 'Bank Account Sample';
}
