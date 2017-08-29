import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-widget',
  templateUrl: './add-widget.component.html',
  styleUrls: ['./add-widget.component.css']
})
export class AddWidgetComponent {
  addWidgetForm: FormGroup;
  types = ['Table', 'Bar', 'Pie'];
  dataStreams = ['Agent'];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.addWidgetForm = this.fb.group({
      name: ['', Validators.required],
      type: [this.types[0], Validators.required],
      dataStream: [this.dataStreams[0], Validators.required],
      defaultSize: this.fb.group({
        rows: ['', Validators.required],
        columns: ['', Validators.required]
      })
    });
  }

  get name() {
    return this.addWidgetForm.get('name');
  }

  get rows() {
    return this.addWidgetForm.get('defaultSize.rows');
  }

  get columns() {
    return this.addWidgetForm.get('defaultSize.columns');
  }
}
