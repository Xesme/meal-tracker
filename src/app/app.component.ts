import { Component, Output } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterMealList: Meal[] = [
    new Meal("Hamburger", "Tried a boca patty!", 452, 1),
    new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354, 2),
    new Meal("Fries", "I only ate half of them.", 365, 3)
  ];

  selectedMeal = null;


  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
   this.selectedMeal = null;
 }

}
