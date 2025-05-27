import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { FormService } from '../../../services/form.service';
import { FieldTypeDefinition, FormField } from '../../../models/field';
import { FormFieldComponent } from '../form-field/form-field.component';

@Component({
  selector: 'app-form-editor',
  imports: [DragDropModule,FormFieldComponent],
  templateUrl: './form-editor.component.html',
  styleUrl: './form-editor.component.scss'
})
export class FormEditorComponent {

  formService = inject(FormService);

  onDropInRow(event: CdkDragDrop<string>,rowId: string) {
    console.log(event);
    if(event.previousContainer.data === 'field-selector'){
      const fieldType = event.item.data as FieldTypeDefinition;
      const newField: FormField = {
        id: crypto.randomUUID(),
        type: fieldType.type,
        ...fieldType.defaultConfig
      };
      this.formService.addField(newField,rowId,event.currentIndex);
      return;
    }
  }

}
