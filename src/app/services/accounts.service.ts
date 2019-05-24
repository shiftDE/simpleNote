import { Injectable } from '@angular/core';
import { IAccount } from '../interfaces/account';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})

export class AccountsService {

  allAccounts: IAccount[] = [
    {userId: 1, username: 'Tom', password: '9999', email: 'tom@email.com'},
    {userId: 2, username: 'Hou', password: '8888', email: 'hou@email.com'},
    {userId: 3, username: 'Din', password: '7777', email: 'din@email.com'}
  ];

  constructor(private loggingService: LoggingService) { }


  signupAccount(newAccountData: IAccount) {
    this.allAccounts.push(newAccountData);
    this.loggingService.logMessage(newAccountData.username);
  }


}
