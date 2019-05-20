import { Injectable } from '@angular/core';
import { IAccount } from '../interfaces/account';

@Injectable({
  providedIn: 'root'
})

export class AccountsService {

  allAccounts: IAccount[] = [
    {username: 'Tom', password: '9999', email: 'tom@email.com'},
    {username: 'Hou', password: '8888', email: 'hou@email.com'},
    {username: 'Din', password: '7777', email: 'din@email.com'}
  ];

  signupAccount(newAccountData: IAccount) {
    this.allAccounts.push(newAccountData);
  }


  constructor() { }
}
