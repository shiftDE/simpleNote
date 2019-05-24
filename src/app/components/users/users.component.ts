import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from '../../services/accounts.service';
import { IAccount } from 'src/app/interfaces/account';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  constructor(private routing: Router, private accountsService: AccountsService) { }


  showAccounts: IAccount[];


  ngOnInit() {
    this.showAccounts = this.accountsService.allAccounts;
  }

  onClicking() {
    this.routing.navigate(['/signup']);
  }

}
