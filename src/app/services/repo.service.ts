import {Injectable} from '@angular/core';


@Injectable()
export class RepoService {
  backendUrl = 'http://lenhub.ru:8000';


    /*AUTH*/ 
  access_token: any;
  refresh_token: any;
/** APP STAT */
    javaVendor: String;
    javaVersion: String;
    pid: Number;
    uptime: Number;

    heapInit: Number;
    heapMax: Number;
    heapUsed: Number;
    heapCommited:Number;

    nonHeapInit: Number;
    nonHeapCommited:Number;
    nonHeapUsed:Number;
    nonHeapMax: Number;

    threadCount: Number;
    daemons:Number;

    /** CACHE STAT */
 
averageLoadPenalty: Number;
hitRate: Number;
evictionCount: Number;
estimatedSize: Number;

  constructor() {
    this.access_token = localStorage.getItem('access_token');
    this.refresh_token = localStorage.getItem('refresh_token');
  }
}
