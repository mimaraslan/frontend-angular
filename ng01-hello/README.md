ng new myproject

cd ng01-hello
code .

ng g component components/header
ng g component components/about
ng g component components/contact


ng g module content

ng g component content/content-list

// EĞER components KLASÖRÜNE EKLİYORSAK O ZAMAN MODULÜNÜ BELİRTMELİYDİK!!!

ng g component components/content-list  --module=content


ng g directive directives/highlight --skipTest


ng g service services/user --skipTest



https://jsonplaceholder.typicode.com/users



# Ng01Hello

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
