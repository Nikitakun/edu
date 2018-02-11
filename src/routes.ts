import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

export default RouterModule.forRoot(ROUTES);
