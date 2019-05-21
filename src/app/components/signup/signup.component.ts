import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AccountsService } from 'src/app/services/accounts.service';
import { IAccount } from 'src/app/interfaces/account';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('sUsername') signupUsername: ElementRef;
  @ViewChild('sPassword') signupPassword: ElementRef;
  @ViewChild('sEmail') signupEmail: ElementRef;


  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
  }

  newAccount() {
    let a: IAccount = {username: this.signupUsername.nativeElement.value, password: this.signupPassword.nativeElement.value, email: this.signupEmail.nativeElement.value};
    this.accountsService.signupAccount(a);
  }

}
