export interface FieldTypeDefinition {
  icon: string;
  type: string;
  label: string;
}

export interface FormField {
  id: string;
  type: string;
  label: string;
  required: boolean;
}
