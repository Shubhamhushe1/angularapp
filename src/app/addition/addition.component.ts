import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addition',
  standalone: true,
  imports: [ FormsModule ], // forms module for importing forms from html files 
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.css'
})
export class AdditionComponent {
  
  no1:number = 0;
  no2:number = 0;
  answer:number = 0;

  add(){

     this.answer = this.no1 + this.no2;

  }

  subtract(){

    this.answer = this.no1 - this.no2;
  
  }

  multiply(){
   
    this.answer = this.no1 * this.no2;
  
  }

  division(){

    this.answer = this.no1 / this.no2;

  }


  resetform(){

    this.no1 = 0;
    this.no2 = 0;
    this.answer =0;

  }
}
