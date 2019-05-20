import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { IAccount } from 'src/app/interfaces/account';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('sUsername') signupUsername;
  @ViewChild('sPassword') signupPassword;
  @ViewChild('sEmail') signupEmail;


  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
  }

  newAccount() {
    let a: IAccount = {username: this.signupUsername, password: this.signupPassword, email: this.signupEmail};
    this.accountsService.signupAccount(a);
  }

}
