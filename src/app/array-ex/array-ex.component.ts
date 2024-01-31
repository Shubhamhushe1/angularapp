import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-array-ex',
  standalone: true,
  imports: [CommonModule,FormsModule],   // => CommonModule is use to define tables
  templateUrl: './array-ex.component.html',
  styleUrl: './array-ex.component.css'
})
export class ArrayExComponent {

  show : boolean = true;   // If show is true then it will show the table if it is false we don't want to show see table.

  students : any[] = [

{
  rno: 1,
  name: "Aashi"
},
{
  rno: 2,
  name: "Bashi"
},
{
  rno: 3,
  name: "Carlos"
},
{
  rno: 4,
  name: "David"
},
{
  rno: 5,
  name: "Emault"
}
];

}
