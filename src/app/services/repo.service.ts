import {Injectable} from '@angular/core';


@Injectable()
export class RepoService {
  backendUrl = 'http://lenhub.ru:8000';


    /*AUTH*/ 
  access_token: any;
  refresh_token: any;
 

  constructor() {
    this.access_token = localStorage.getItem('access_token');
    this.refresh_token = localStorage.getItem('refresh_token');
  }
}
