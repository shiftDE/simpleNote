import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../interfaces/user';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})


export class EditUserComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  usersList: IUser = {id: 0, name: 'Sarah'};

  ngOnInit() {
    console.log(this.activeRoute);
    this.usersList.id = this.activeRoute.snapshot.params['id'];
    this.usersList.name = this.activeRoute.snapshot.params['name'];

    this.activeRoute.params.subscribe(
      (myParams: Params) => {
        this.usersList.id = myParams['id'];
        this.usersList.name = myParams['name'];
      }
    )
  }
}
