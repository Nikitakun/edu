import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/registration/sign-up.component';

// export const getSignUpUrl = () => ['/sign-up'];

// export const getLoginUrl = () => ['/login'];

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    }

];

export default RouterModule.forRoot(ROUTES);
