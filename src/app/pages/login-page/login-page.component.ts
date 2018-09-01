import {Component, OnInit, AfterViewChecked} from '@angular/core';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
  })
  export class LoginPageComponent implements OnInit,AfterViewChecked {
isLoading:boolean=true;

    ngOnInit(): void {
      this.isLoading = true;
    }

    ngAfterViewChecked() : void {
      this.isLoading = false;
  }

constructor(){
}
  }