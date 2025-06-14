import { Injectable } from '@angular/core';
import { FieldTypeDefinition } from '../models/field';

const TEXT_FIELD_DEFINITION = {
  type: 'text',
  label: 'Text Field',
  icon: 'text_fields',
  defaultConfig: {
    label: 'Text Field',
    required: false
  }
}

const CHECKBOX_FIELD_DEFINITIOM = {
  type: 'checkbox',
  label: 'Checkbox',
  icon: 'check_box',
  defaultConfig: {
    label: 'Checkbox',
    required: false
  }
}

@Injectable({
  providedIn: 'root'
})
export class FieldTypesService {

  fieldTypes = new Map<string , FieldTypeDefinition>([
    ['text' ,TEXT_FIELD_DEFINITION ],
    ['checkbox' , CHECKBOX_FIELD_DEFINITIOM]
  ]);

  getAllFieldTypes(): FieldTypeDefinition[] {
    return Array.from(this.fieldTypes.values());
  }

  constructor() { }
}
