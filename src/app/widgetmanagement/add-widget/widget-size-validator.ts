import {AbstractControl, ValidatorFn} from '@angular/forms';

export function widgetSizeValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const size = control.value;
    return size > 0 && size <= 12 ? null : { 'widgetSize': {value: control.value} };
  };
}
