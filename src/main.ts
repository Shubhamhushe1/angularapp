import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AdditionComponent } from './app/addition/addition.component';
import { ArrayExComponent } from './app/array-ex/array-ex.component';
import { PipesExComponent } from './app/pipes-ex/pipes-ex.component';

bootstrapApplication(AppComponent, appConfig)   // => We have to mention that the component name we want to run
  .catch((err) => console.error(err));
