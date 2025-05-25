import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-editor',
  imports: [DragDropModule],
  templateUrl: './form-editor.component.html',
  styleUrl: './form-editor.component.scss'
})
export class FormEditorComponent {

  onDropInRow(event: CdkDragDrop<string>) {
    console.log(event);
    if(event.previousContainer.data === 'field-selector'){
      //Add our field to the row
      return;
    }
  }

}
