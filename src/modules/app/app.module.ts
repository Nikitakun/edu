import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import routes from './routes';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';
import { AppSidebarComponent } from '../../components/app-sidebar/app-sidebar.component';
import { ApiService } from '../../services/api.service';
import { LoginService } from '../../services/login.service';
import { AuthService } from '../../services/auth.service';
import { MessageBusService } from '../../services/message-bus.service';
import { HttpClientModule } from '@angular/common/http';
import { MarkUpModule } from '../../mark-up-components/mark-up.module';
import { SignUpComponent } from '../../components/registration/sign-up.component';
import { SignUpService } from '../../services/sign-up.service';
import { UserProfileComponent } from '../user-settings/user-profile/user-profile.component';
import { AppLayoutComponent } from '../../components/app-layout/app-layout.component';
import { MainGuard } from '../../services/guards/main-guard';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        routes,
        MarkUpModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        AppHeaderComponent,
        AppSidebarComponent,
        SignUpComponent,
        AppLayoutComponent
    ],
    providers: [
        ApiService,
        AuthService,
        LoginService,
        MessageBusService,
        SignUpService,
        MainGuard
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
    constructor(private messageBusService: MessageBusService) {}
}
