import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {UserService} from './services/user.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NewUserComponent } from './components/new-user/new-user.component';
import {routes} from './app.routes';
import { GetUserComponent } from './components/get-user/get-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    GetUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
