import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { NewMealComponent } from './new-meal/new-meal.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { CaloriesPipe } from './calories.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MealDetailComponent,
    NewMealComponent,
    EditMealComponent,
    CaloriesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
