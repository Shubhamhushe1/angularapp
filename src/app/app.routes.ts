import { Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { ArrayExComponent } from './array-ex/array-ex.component';
import { PipesExComponent } from './pipes-ex/pipes-ex.component';
import { DynamicroutingComponent } from './dynamicrouting/dynamicrouting.component';
import { CompanyComponent } from './company/company.component';

export const routes: Routes = [


{path: 'addition', component:AdditionComponent},

{path: 'array-ex', component:ArrayExComponent},

{path: 'pipes-ex', component:PipesExComponent},

{ path : 'dynamicrouting', component:DynamicroutingComponent},

{ path : 'company', component:CompanyComponent}
];
