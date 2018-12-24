import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZanesquadSubmitIfValidDirective } from './submit-if-valid.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ZanesquadSubmitIfValidDirective],
  exports: [ZanesquadSubmitIfValidDirective],
})
export class ZanesquadSubmitIfValidModule { }
