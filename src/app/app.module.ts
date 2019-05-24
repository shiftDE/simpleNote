import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { SignupComponent } from './components/signup/signup.component';
import { AccountsService } from './services/accounts.service';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { UsersComponent } from './components/users/users.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';

const pathRouters: Routes = [
  {path: '', redirectTo: 'HomeComponent', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id/:name', component: EditUserComponent},
  {path: 'about', component: AboutComponent},
  {path: 'edit', component: EditUserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    UsersComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(pathRouters)
  ],
  providers: [AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
