import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { RepoService } from './repo.service';
import { appstat } from '../model/appstat';
import { cacheStatModel } from '../model/cacheStatModel';
import { topics } from '../model/topics';
import { messageModel } from '../model/messagemodel';
@Injectable()
export class LoadService {
    constructor(private _http: HttpClient, private repo: RepoService){
    }
url="https://malygin.club/"

    loadAppStat(){
    const headers = new HttpHeaders({'Accept': 'application/json', 'Content-Type': 'application/json'})
        this._http.get<appstat>(this.url+"statistic/app",{headers:headers}).subscribe(res=>{
           this.repo.javaVendor = res.javaVendor;
           this.repo.javaVersion = res.javaVersion;
           this.repo.pid = res.pid;
           this.repo.uptime = res.uptime;

           this.repo.heapMax = res.heapMax;
           this.repo.heapInit = res.heapInit;
           this.repo.heapUsed = res.heapUsed;
           this.repo.heapCommited = res.heapCommited;

           this.repo.nonHeapInit = res.nonHeapInit;
           this.repo.nonHeapUsed = res.nonHeapUsed;
           this.repo.nonHeapCommited = res.nonHeapCommited;

           this.repo.threadCount = res.threadCount;
           this.repo.daemons = res.daemons;
        })
    }

    loadCacheStat(){
        const headers = new HttpHeaders({'Accept': 'application/json', 'Content-Type': 'application/json'})
        this._http.get<cacheStatModel>(this.url+"statistic/cache",{headers:headers}).subscribe(res=>{
          this.repo.averageLoadPenalty =   res.averageLoadPenalty;
          this.repo.hitRate =   res.hitRate;
          this.repo.evictionCount =   res.evictionCount;
          this.repo.estimatedSize =   res.estimatedSize;

    })
}

loadQuestions(){
    const headers = new HttpHeaders({'Accept': 'application/json', 'Content-Type': 'application/json'})
    this._http.get<Array<topics>>(this.url+"telegram/questions",{headers:headers}).subscribe(res=>{
        this.repo.currentTopics = res
    })
}
loadPairs(){
    const headers = new HttpHeaders({'Accept': 'application/json', 'Content-Type': 'application/json'})
    this._http.get<Map<Number,Number>>(this.url+"api/cache/current",{headers:headers}).subscribe(res=>{
        this.repo.pairs = res
    })
}

truncate(){
    const headers = new HttpHeaders({'Accept': 'application/json', 'Content-Type': 'application/json'})
    this._http.get(this.url+"api/logs/clear",{headers:headers}).subscribe(res=>{
        console.log(res)
    })
}
    loadMessages(id:Number){
        const headers = new HttpHeaders({'Accept': 'application/json', 'Content-Type': 'application/json'})
        this._http.get<Array<messageModel>>(this.url+"api/logs/"+id,{headers:headers}).subscribe(res=>{
            this.repo.messages = res
        })
    }



    
}