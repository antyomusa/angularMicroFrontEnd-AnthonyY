import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    FooterLayoutComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    SharedModule
  ]
})
export class DefaultModule { }
