import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotComponent } from './plot.component';



@NgModule({
  declarations: [PlotComponent],
  exports: [
    PlotComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlotModule { }
