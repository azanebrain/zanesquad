import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core'
import {
  FormGroup,
} from '@angular/forms'

/**
 * Validates the controls on a form
 *
 * Input: A form group
 * Output: After the user clicks, outputs if the form is valid
 */
@Directive({
  selector: '[zanesquadSubmitIfValid]'
})
export class ZanesquadSubmitIfValidDirective {

  // The form being validated
  @Input('zanesquadSubmitIfValid') formRef: FormGroup
  @Output() valid = new EventEmitter<void>()

  // Intercept the button's click event
  @HostListener('click')
  handleClick() {
    this.markFieldsAsTouched()
    this.emitIfValid()
    // Update value and validity so that custom validators are re-evaluated
    this.formRef.updateValueAndValidity()
  }

  constructor() { }

  private markFieldsAsTouched(): void {
    Object.keys(this.formRef.controls).forEach(field => this.formRef.controls[field].markAsTouched())
  }

  /**
   * Emits an event if the form is valid
   */
  private emitIfValid(): void {
    if (this.formRef.valid) {
      this.valid.emit()
    }
  }

}
