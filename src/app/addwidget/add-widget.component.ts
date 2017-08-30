import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { widgetSizeValidator } from './widget-size-validator';

@Component({
  selector: 'app-add-widget',
  templateUrl: './add-widget.component.html',
  styleUrls: ['./add-widget.component.css']
})
export class AddWidgetComponent {
  addWidgetForm: FormGroup;
  types = ['Table', 'Bar', 'Pie'];
  dataStreams = ['Agent'];

  static validateWidgetSize(control) {
    const invalid = control.invalid && (control.dirty || control.touched);

    return {
      required: invalid && control.errors.required,
      invalidSize: invalid && control.errors.widgetSize
    };
  }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    const sizeValidator = Validators.compose([Validators.required, widgetSizeValidator()]);

    this.addWidgetForm = this.fb.group({
      name: ['', Validators.required],
      type: [this.types[0], Validators.required],
      dataStream: [this.dataStreams[0], Validators.required],
      defaultSize: this.fb.group({
        rows: ['', sizeValidator],
        columns: ['', sizeValidator]
      })
    });
  }

  get errors() {
    return {
      name: this.validateName(),
      rows: this.validateRows(),
      columns: this.validateColumns()
    };
  }

  validateName() {
    const name = this.addWidgetForm.get('name');
    return {
      required: name.invalid && (name.dirty || name.touched)
    };
  }

  validateRows() {
    const rows = this.addWidgetForm.get('defaultSize.rows');
    return AddWidgetComponent.validateWidgetSize(rows);
  }

  validateColumns() {
    const columns = this.addWidgetForm.get('defaultSize.columns');
    return AddWidgetComponent.validateWidgetSize(columns);
  }
}
