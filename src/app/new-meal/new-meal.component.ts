import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './../meal.model';


@Component({
  selector: 'app-new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.css']
})
export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

submitForm(name: string, details: string, calories: number){
  var newMeal = new Meal(name, details, calories);
  this.newMealSender.emit(newMeal);
}
}
