import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { Meal } from './../meal.model';


@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent{

  ngOnInit() {
  }

  title = 'Meals!';
  meals: Meal[] = [
    new Meal("Hamburger", "Tried a boca patty!", 452),
    new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
    new Meal("Fries", "I only ate half of them.", 365)
  ];


}
