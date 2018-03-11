import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

    private userToken: string;

    public getToken(): Observable<string> {
        return Observable.of(this.userToken || null);
    }

    public get isLoggedIn(): boolean {
        // temporarily
        return true;
    }

}
