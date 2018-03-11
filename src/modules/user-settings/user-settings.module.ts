import { NgModule } from '@angular/core';
import { UserSettingsRoutes } from './user-settings.routes'
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MarkUpModule } from '../../mark-up-components/mark-up.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        ReactiveFormsModule,
        UserSettingsRoutes,
        MarkUpModule,
        CommonModule
    ],
    declarations: [UserProfileComponent],
    exports: [UserProfileComponent]
})
export class UserSettingsModule { }
