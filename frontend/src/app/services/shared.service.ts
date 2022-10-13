import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
})

export class AppService {

    private path:any;
    // private param: HttpParams;

    constructor(private baseService: BaseService, private http: HttpClient) { }
    doSentimentAnalysis(text:any): Observable<any> {
        this.path = '/sentiment';
        return this.baseService.post(this.path, text);
    }


    doSentimentAnalysisOnUrl(link: any): Observable<any> {
        this.path = '/product_sentiments';
        return this.baseService.post(this.path, link);
    }
}