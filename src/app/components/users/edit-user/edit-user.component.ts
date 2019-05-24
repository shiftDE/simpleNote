import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IAccount } from 'src/app/interfaces/account';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})


export class EditUserComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  usersList: IAccount = {userId: 0, username: 'sarah', password: '2343', email: 'sarah@email.com'};

  ngOnInit() {
    console.log(this.activeRoute);
    this.usersList.userId = this.activeRoute.snapshot.params['id'];
    this.usersList.username = this.activeRoute.snapshot.params['name'];

    this.activeRoute.params.subscribe(
      (myParams: Params) => {
        this.usersList.userId = myParams['id'];
        this.usersList.username = myParams['name'];
      }
    )
  }
}
