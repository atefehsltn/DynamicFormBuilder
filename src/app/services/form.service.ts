import { Injectable, signal } from '@angular/core';
import { FormRow } from '../models/form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private _rows = signal<FormRow[]>([]);
  public readonly rows = this._rows.asReadonly();

  constructor() { }
}
