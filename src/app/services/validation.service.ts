import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, fieldName: string, validatorValue?: any) {
    const config = {
      'required': `${fieldName} is required`,
      'minlength': `Minimum length ${validatorValue.requiredLength}`,
      'pattern': `please enter valid data`,
      'maxlength': `Maximum length is ${validatorValue.requiredLength}`
    };
    return config[validatorName];
  }
}

