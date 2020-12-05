import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScansComponent } from './scans.component';
import { ScanContainerComponent } from './components/scan-container/scan-container.component';



@NgModule({
    declarations: [ScansComponent, ScanContainerComponent],
    exports: [
        ScansComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ScansModule { }
