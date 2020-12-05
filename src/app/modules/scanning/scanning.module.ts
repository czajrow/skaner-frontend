import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScanningComponent } from './scanning.component';
import { SectionModule } from '../../shared/section/section.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [ScanningComponent],
    exports: [
        ScanningComponent
    ],
    imports: [
        CommonModule,
        SectionModule,
        ReactiveFormsModule
    ]
})
export class ScanningModule { }
