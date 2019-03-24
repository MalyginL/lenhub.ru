import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule, routes} from './app-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  AuthGuardService as AuthGuard
} from './services/auth-guard.service';
import {OauthService} from './services/oauth.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RepoService } from './services/repo.service';
import { LoadService } from './services/load.service';
import { HttpClientModule } from '@angular/common/http';
import { SizePipe } from './services/sizePipe';

@NgModule({
  declarations: [
    SizePipe,
    AppComponent,
    LoginPageComponent,
    
  ],
  imports: [
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false
    }),
    AppRoutingModule,
  ],
  providers: [OauthService, AuthGuard,RepoService,LoadService],
  bootstrap: [AppComponent],
  entryComponents: [  ]
})
export class AppModule { }
