import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';



@Component({
  selector: 'app-error-control-message',
  template: `<div class="errormsg" *ngIf="errorMessage !== null" style="color:red;">{{errorMessage}}</div>`
})
export class ErrorControlMessageComponent {

  @Input() control: FormControl;
  @Input() fieldName: string;
  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.fieldName, this.control.errors[propertyName]);
      }
    }

    return null;
  }

}

