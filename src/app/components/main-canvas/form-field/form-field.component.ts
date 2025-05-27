import { Component, input } from '@angular/core';
import { FormField } from '../../../models/field';

@Component({
  selector: 'app-form-field',
  imports: [],
  templateUrl: './form-field.component.html',
})
export class FormFieldComponent {
  field = input.required<FormField>()
}
