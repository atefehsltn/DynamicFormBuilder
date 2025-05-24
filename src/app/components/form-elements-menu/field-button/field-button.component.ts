import { MatButtonModule } from '@angular/material/button';
import { FieldTypeDefinition } from './../../../models/field';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-field-button',
  imports: [MatButtonModule,MatIconModule,DragDropModule],
  templateUrl: './field-button.component.html',
  styleUrl: './field-button.component.scss'
})
export class FieldButtonComponent {

  field = input.required<FieldTypeDefinition>();

}
