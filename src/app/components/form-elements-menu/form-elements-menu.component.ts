import { FieldTypesService } from './../../services/field-types.service';
import { Component, inject } from '@angular/core';
import { FieldButtonComponent } from './field-button/field-button.component';

@Component({
  selector: 'app-form-elements-menu',
  imports: [FieldButtonComponent],
  templateUrl: './form-elements-menu.component.html',
  styleUrl: './form-elements-menu.component.scss'
})
export class FormElementsMenuComponent {

  fieldTypesService = inject(FieldTypesService);
  fieldTypes = this.fieldTypesService.getAllFieldTypes();


}
