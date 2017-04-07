# Food-Diary

## Created by Xia Amendolara

  This web application was made using angular 2. It allows the user to track their meals throughout the day and sort their meals based on calorie content. The user can enter data such as description of food ( hamburger), details (boca burger), and calorie content (452). Calorie content must be calculated elsewhere.

## User Story

* I want to log a food I have eaten by submitting a form with food name, calories and details.
* I want to view a list of foods I have logged.
* I want options to view all foods, only high-calorie foods (more than 500 calories), or only lower-calorie
  foods (less than 500 calories).
* I want to click a food to edit its name, details or calories (in case I decide to pretend my fries were   
  100 calories instead of 365).

## Implementation Plan

| Objective | Implementation | Status |
|:-------------:|:-------------:|:-------------:|
| Create a new project | $ng new food-diary | completed |
| Application has a well thought out README | Set up README with implementation plan and all other necessary information. | completed |
| Application uses a model to organize data. | Create model for Meal | complete |
| Components are used to create display and behavior for your templates. | Create components for display-meal, add-meal, edit-meal | complete (meal-detail: done, meal-edit: done, new-meal: done) |
| Models can be filtered using a pipe. | Filter data with pipes to change the display-meal order by high or low calorie meals | incomplete (high-calorie: done, low-calorie: done, all-meals: done)|
| (Extra) Project is portfolio-quality | Removed unnecessary code and use SASS or CSS for styling | started |

## Setup/Installation Requirements

  * Follow the link to the Git repository for this project. [Github](https://github.com/Xesme/meal-tracker.git)
  * In the terminal run `*$ git clone link-to-repo-here*`
  * In the terminal run `*$ cd project-name*`
  * In the terminal run `*$ npm install*`
  * In the terminal run `*$ npm install*`
  * In the terminal run `*npm start*`
  * In the terminal run `*ng serve*`
  * Open your broswer and go to `*localhost:4200*` to view the web application in browser.
  
##  Configuration/dependencies

  * NPM (Development)
    * @angular/cli (Populates  an Angular application)

    * @angular/compiler-cli (Compiles TypeScript into JavaScript in which browsers can understand)

    * Jasmine - core, spec-reporter  (Behavior-driven development framework for testing JavaScript code)

    * Node (JavaScript runtime built on Chrome's V8 JavaScript engine)

    * ts-node (TypeScript execution environment for node)
    * typescript (A superset of JavaScript that compiles to clean JavaScript output)

    * codelyzer (Helps write consistent code, and discover potential errors)

    * gulp-concat (concatenates files into one)

    * karma - chrome-launcher, cli, jasmine, jasmine-html-reporter, coverage-istanbul-reporter (Allows you to execute JavaScript code in multiple real browsers)

    * protractor (end-to-end test framework for Angular and AngularJS applications)

    * tslint (Checks your TypeScript code for readability, maintainability, and functionality errors)

    * bower (Production)

    * Bootstrap

    * Firebase (data management)
    
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Bugs
There are no known bugs at this time, but please contact the creator with questions or concerns regarding this application.

## Technologies

## Technologies Used
* JavaScript
* TypeScript
* Angular 2
* Node
* Bower
* Bootstrap
* HTML
* CSS
* SASS
* Git
* FireBase

## Licensing
This application features MIT licensing.

Copyright &copy; 2017 **Xia Amendolara** All Rights Reserved.
