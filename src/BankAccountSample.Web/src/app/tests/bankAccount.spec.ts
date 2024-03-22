import { TestBed } from '@angular/core/testing';
import { BankAccountService } from '../services/bankAccountService';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [BankAccountService]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BankAccountService);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'BankAccountSample.Web'`, () => {
    const fixture = TestBed.createComponent(BankAccountService);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('BankAccountSample.Web');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BankAccountService);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('BankAccountSample.Web app is running!');
  });
});
