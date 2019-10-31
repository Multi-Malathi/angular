import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {NewUserComponent} from './components/new-user/new-user.component';
import {GetUserComponent} from './components/get-user/get-user.component';

export const ROUTES: Routes = [
  {path: 'newUser', component: NewUserComponent},
  {path: 'getUser', component: GetUserComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);
