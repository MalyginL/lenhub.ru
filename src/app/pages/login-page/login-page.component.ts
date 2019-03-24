import {Component, OnInit, AfterViewChecked} from '@angular/core';

import {NgbModal,NgbModalRef, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import{
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { HttpBackend } from '@angular/common/http';
import { LoadService } from 'src/app/services/load.service';
import { RepoService } from 'src/app/services/repo.service';
import { SizePipe } from 'src/app/services/sizePipe';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
    providers: [ SizePipe ]
  })

export class LoginPageComponent implements OnInit,AfterViewChecked {
isLoading:boolean=true;








constructor(private modalService: NgbModal,private loadService: LoadService, private repo:RepoService) {}

get javaVendor():String { return this.repo.javaVendor};
get javaVersion():String { return this.repo.javaVersion};
get pid():Number { return this.repo.pid};
get uptime():Number {  return this.repo.uptime };

get heapInit():Number {  return this.repo.heapInit };
get heapMax():Number {  return this.repo.heapMax };
get heapUsed():Number {  return this.repo.heapUsed };
get heapCommited():Number {  return this.repo.heapCommited };

get nonHeapCommited():Number {  return this.repo.nonHeapCommited };
get nonHeapUsed():Number {  return this.repo.nonHeapUsed };
get nonHeapInit():Number {  return this.repo.nonHeapInit };

get threadCount():Number {  return this.repo.threadCount };
get daemons():Number {  return this.repo.daemons };

get averageLoadPenalty():Number {  return this.repo.averageLoadPenalty };
get hitRate():Number {  return this.repo.hitRate };
get evictionCount():Number {  return this.repo.evictionCount };
get estimatedSize():Number {  return this.repo.estimatedSize };




private modalRef: NgbModalRef;

openModal(content) {
  this.modalRef = this.modalService.open(content,{size:"sm"});
}



getFormathours(input) {
  var totalHours, totalMinutes, totalSeconds, hours, minutes, seconds, result='';
  totalSeconds = input / 1000;
  totalMinutes = totalSeconds / 60;
  totalHours = totalMinutes / 60;

  seconds = Math.floor(totalSeconds) % 60;
  minutes = Math.floor(totalMinutes) % 60;
  hours = Math.floor(totalHours) % 60;
  if (hours !== 0) {
      result += hours+' hr: ';
      if (minutes.toString().length == 1) {
          minutes = '0'+minutes;
      }
    }
  result += minutes+' min';
  return result;
}


update(){
  setInterval(() => {
    this.loadService.loadAppStat();
    this.loadService.loadCacheStat();
  }, 60000);
}


    ngOnInit(): void {
      this.isLoading = true;
      this.loadService.loadAppStat();
      this.loadService.loadCacheStat();
      this.update()
    }

    ngAfterViewChecked() : void {
      this.isLoading = false;
  }
  }