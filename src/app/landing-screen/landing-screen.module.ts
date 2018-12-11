import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingScreenComponent } from './landing-screen.component';
import { LandingScreenRoutingModule } from './landing-screen-routing.module';

@NgModule({
  declarations: [
    LandingScreenComponent,
  ],
  imports: [
    CommonModule,
    LandingScreenRoutingModule,
  ]
})
export class LandingScreenModule { }
