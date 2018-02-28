import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { MessageBusService } from './message-bus.service';

@Injectable()
export class LoginService {

    constructor(private apiService: ApiService,
                private messageBusService: MessageBusService) {}

    public login(loginData: LoginModel): Observable<LoginModel> {
        return this.apiService.post('account/login', loginData)
            .map((loginModel: LoginModel) => {
                this.messageBusService.sendLogin(loginModel);
                return loginModel;
            });
    }

}
