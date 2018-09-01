import {Component, OnInit, AfterViewChecked} from '@angular/core';

import {NgbModal,NgbModalRef, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
  })
  export class LoginPageComponent implements OnInit,AfterViewChecked {
isLoading:boolean=true;

constructor(private modalService: NgbModal) {}

private modalRef: NgbModalRef;

openModal(content) {
  this.modalRef = this.modalService.open(content,{size:"sm"});
}





    ngOnInit(): void {
      this.isLoading = true;
    }

    ngAfterViewChecked() : void {
      this.isLoading = false;
  }
  }