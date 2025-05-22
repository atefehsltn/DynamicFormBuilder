import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormElementsMenuComponent } from './components/form-elements-menu/form-elements-menu.component';
import { MainCanvasComponent } from './components/main-canvas/main-canvas.component';
import { FieldSettingsComponent } from './components/field-settings/field-settings.component';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule,FormElementsMenuComponent,MainCanvasComponent,FieldSettingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dynamicFormBuilder';
}
