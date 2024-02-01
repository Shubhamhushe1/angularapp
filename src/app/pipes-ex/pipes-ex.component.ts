import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NametitlePipe } from '../nametitle.pipe';

@Component({
  selector: 'app-pipes-ex',
  standalone: true,
  imports: [CommonModule,NametitlePipe],
  templateUrl: './pipes-ex.component.html',
  styleUrl: './pipes-ex.component.css'
})
export class PipesExComponent {

  name : string ="SHUBHAM";

  course : string = "angular"; 

  myDate : Date = new Date();

}
