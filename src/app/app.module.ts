import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule, routes} from './app-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    
  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [  ]
})
export class AppModule { }
