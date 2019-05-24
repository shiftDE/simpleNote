import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { IAccount } from '../../interfaces/account';
import { AccountsService } from 'src/app/services/accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private loggingService: LoggingService, private accountsService: AccountsService, private routering: Router) {}

  printMessage:string = "Print Test Message";

  showAccounts: IAccount[];

  ngOnInit() {
    this.loggingService.logMessage(this.printMessage);
    this.showAccounts = this.accountsService.allAccounts;

    setTimeout(() => {
      this.routering.navigate(['/users']);
    }, 5000);
  }

}
