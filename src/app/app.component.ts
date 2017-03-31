import { Component, Output } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterMealList: Meal[] = [
    new Meal("Hamburger", "Tried a boca patty!", 452),
    new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
    new Meal("Fries", "I only ate half of them.", 365)
  ];

  selectedMeal = null;

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
   this.selectedMeal = null;
 }

 addMeal(newMeal: Meal){
   this.masterMealList.push(newMeal);
 }

}
