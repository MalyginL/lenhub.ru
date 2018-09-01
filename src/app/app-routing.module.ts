import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

/*const defaultRoutes: Routes = [
    {path: '', component: },
  ];*/

  export const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent
      },
  ];

  @NgModule({
    imports: [],
    exports: [
      RouterModule
    ],
  
  })
  export class AppRoutingModule {}