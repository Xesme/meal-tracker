import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './../app.component';
import { Meal } from './../meal.model';


@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent{
@Input() childMealList: Meal[];
@Output() clickSender = new EventEmitter();

filterMealsByCalories: string = "allMeals";

onChange(calorieOption){
  this.filterMealsByCalories = calorieOption;
}

editButtonHasBeenClicked(mealToEdit: Meal){
  this.clickSender.emit(mealToEdit);
}

}
