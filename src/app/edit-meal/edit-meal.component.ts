import {  Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './../meal.model';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css']
})

export class EditMealComponent {
@Input() childSelectedMeal: Meal;
@Output() editDone = new EventEmitter();

editDoneButton(){
  this.editDone.emit();
}
}
