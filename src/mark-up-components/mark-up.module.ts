import { NgModule } from '@angular/core';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormControlComponent } from './form-control/form-control.component';
import { CommonModule } from '@angular/common';
import { MainContentContainerComponent } from './main-content-container/main-content-container.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        FormContainerComponent,
        FormControlComponent,
        MainContentContainerComponent
    ],
    exports: [
        FormContainerComponent,
        FormControlComponent,
        MainContentContainerComponent
    ]
})
export class MarkUpModule { }
