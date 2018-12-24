# Submit If Valid

This directive is used to provide an "innocent until proven guilty" experience to users. Instead of disabling a form's submit button, it works by validating the form's controls and displaying their errors if any issues occur.

> When you make the submit button disabled and there are no errors displayed, users won’t know why they can’t click the button!

See [this article](https://blog.usejournal.com/angular-techniques-improve-submit-buttons-ux-by-not-disabling-it-896992a94a38) for more information about why this directive is useful.

## Usage

Add the `[zanesquadSubmitIfValid]` directive and the `(valid)` event to a button:

```
<form novalidate [formGroup]="myForm">
    <input matInput formControlName="name">
    <button class="btn btn-primary" [zanesquadSubmitIfValid]="myForm" (valid)="submitForm()">Submit</button>
</form>
```
