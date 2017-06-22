﻿import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { AppComponent } from './app';
import { AppSettings } from './appSettings';

@Injectable()
export class ServerService {
    constructor(private http: Http, private appComponent: AppComponent) { }

    private createHeaders(headers: Headers) {
        var authCookie = this.appComponent.getKey(AppSettings.AuthCookie);
        if (!authCookie)
            return;
        var token = JSON.parse(this.appComponent.getKey(AppSettings.AuthCookie));
        headers.append('Authorization', 'Bearer ' + token.access_token);
    }

    private createLoginHeaders(headers: Headers) {
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }

    loginRequest(url: string, data: any) {
        let headers = new Headers();
        this.createLoginHeaders(headers);
        return this.http.post(url, data, { headers: headers });
    }

    postRequest(url: string, data: any) {
        let headers = new Headers();
        this.createHeaders(headers);
        return this.http.post(url, data, { headers: headers });
    }

    getRequest(url: string) {
        let headers = new Headers();
        this.createHeaders(headers);
        return this.http.get(url, { headers: headers });
    }
}