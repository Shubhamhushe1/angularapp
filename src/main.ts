import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AdditionComponent } from './app/addition/addition.component';

bootstrapApplication(AdditionComponent, appConfig)   // We have to mention that the component name 
  .catch((err) => console.error(err));
