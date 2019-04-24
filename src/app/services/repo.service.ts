import {Injectable} from '@angular/core';
import { topics } from '../model/topics';
import { messageModel } from '../model/messagemodel';


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
messages :Array<messageModel>;
/** BOT STAT */
currentTopics : Array<topics>
pairs : Map<Number,Number>
  constructor() {
    this.access_token = localStorage.getItem('access_token');
    this.refresh_token = localStorage.getItem('refresh_token');
  }



}
