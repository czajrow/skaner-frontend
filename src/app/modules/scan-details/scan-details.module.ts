import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScanDetailsComponent } from './scan-details.component';



@NgModule({
    declarations: [ScanDetailsComponent],
    exports: [
        ScanDetailsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ScanDetailsModule { }
