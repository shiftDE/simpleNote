import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { IAccount } from '../../interfaces/account';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {}

  printMessage:string = "Print Test Message";

  showAccounts: IAccount[];

  ngOnInit() {
    this.loggingService.logMessage(this.printMessage);
    this.showAccounts = this.accountsService.allAccounts;
  }

}
