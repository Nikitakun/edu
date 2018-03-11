import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { SignUpComponent } from '../../components/registration/sign-up.component';
import { AppLayoutComponent } from '../../components/app-layout/app-layout.component';
import { UserProfileComponent } from '../user-settings/user-profile/user-profile.component';
import { MainGuard } from '../../services/guards/main-guard';
import { UserSettingsModule } from '../user-settings/user-settings.module';

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
    },
    {
        path: 'main',
        component: AppLayoutComponent,
        children: [
           /* {
                path: 'profile',
                component: UserProfileComponent
            }*/
           {
                path: '',
                loadChildren: '../user-settings/user-settings.module#UserSettingsModule'
            }

        ],
        canActivate: [MainGuard],
        canActivateChild: [MainGuard]
    }

];

export default RouterModule.forRoot(ROUTES);
