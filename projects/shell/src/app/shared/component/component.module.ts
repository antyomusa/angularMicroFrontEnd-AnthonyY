import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    NgIf,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    NgIf,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class ComponentModule { }
