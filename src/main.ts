import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AdditionComponent } from './app/addition/addition.component';
import { ArrayExComponent } from './app/array-ex/array-ex.component';

bootstrapApplication(ArrayExComponent, appConfig)   // => We have to mention that the component name we want to run
  .catch((err) => console.error(err));
