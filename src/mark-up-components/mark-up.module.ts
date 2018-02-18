import { NgModule } from '@angular/core';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormControlComponent } from './form-control/form-control.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [
        FormContainerComponent,
        FormControlComponent
    ],
    exports: [
        FormContainerComponent,
        FormControlComponent
    ]
})
export class MarkUpModule { }
