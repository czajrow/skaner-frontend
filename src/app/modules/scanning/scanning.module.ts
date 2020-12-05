import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScanningComponent } from './scanning.component';
import { SectionModule } from '../../shared/section/section.module';



@NgModule({
    declarations: [ScanningComponent],
    exports: [
        ScanningComponent
    ],
  imports: [
    CommonModule,
    SectionModule
  ]
})
export class ScanningModule { }
