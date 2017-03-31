import { Component, Input, Output } from '@angular/core';
import { AppComponent } from './../app.component';
import { Meal } from './../meal.model';


@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent{
@Input() childMealList: Meal[];

editMeal() {
  alert("It clicks!!!")
}

  ngOnInit() {
  }

}
