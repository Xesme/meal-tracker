import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css']
})
export class EditMealComponent {

  ngOnInit() {
  }

  editMeal() {
    alert("It clicks!!!");
    console.log("this is clicked");
  }
}
