import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { RepoService } from './repo.service';
import { appstat } from '../model/appstat';
import { cacheStatModel } from '../model/cacheStatModel';
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
    
}