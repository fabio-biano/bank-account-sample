import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import services
import { BankAccountService } from './services/bankAccountService';

@NgModule({
  declarations: [
    BankAccountService
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [BankAccountService]
})
export class AppModule { }
