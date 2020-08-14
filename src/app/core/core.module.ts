import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreRoutingModule} from '@/core/core-routing.module';
import { RootLayoutComponent } from './components/root-layout/root-layout.component';



@NgModule({
  declarations: [RootLayoutComponent],
  exports: [
    RootLayoutComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
  ]
})
export class CoreModule { }
