import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import routes from '../../routes';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';
import { AppSidebarComponent } from '../../components/app-sidebar/app-sidebar.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        RouterModule,
        routes
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        AppHeaderComponent,
        AppSidebarComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
