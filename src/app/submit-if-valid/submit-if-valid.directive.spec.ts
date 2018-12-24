import {
  discardPeriodicTasks,
  fakeAsync,
} from '@angular/core/testing'
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'

import {
  ZanesquadSubmitIfValidDirective,
} from './submit-if-valid.directive'

describe('SubmitIfValidDirective', () => {
  let directive: ZanesquadSubmitIfValidDirective

  beforeEach(() => {
    directive = new ZanesquadSubmitIfValidDirective()
    directive.formRef = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('')
    })
  })

  it('should create an instance', () => {
    expect(directive).toBeTruthy()
  })

  it(`should mark each control in a provided form as touched`, () => {
    directive.handleClick()
    expect(directive.formRef.controls.name.touched).toBeTruthy('Name')
    expect(directive.formRef.controls.name.touched).toBeTruthy('Name')
  })

  it(`should emit when the form is valid`, (done) => {
    directive.valid.subscribe((result: void) => {
      expect(result).toBeUndefined()
      done()
    })

    // Change the value of the required field so the form is valid
    directive.formRef.controls.name.setValue('some name')

    directive.handleClick()
  })

  it(`should not emit when the form is not valid`, fakeAsync((done) => {
    let myvalue = 'initial'

    directive.valid.subscribe((result: void) => {
      // The valid event should not be triggered
      myvalue = 'changed'
      expect(5).toBe(10)
      done()
    })

    directive.handleClick()

    // Kill all subscriptions
    discardPeriodicTasks()

    expect(myvalue).toBe('initial')
  }))
})
