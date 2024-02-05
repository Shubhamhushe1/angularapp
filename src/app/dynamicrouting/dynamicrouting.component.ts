import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamicrouting',
  standalone: true,
  imports: [],
  templateUrl: './dynamicrouting.component.html',
  styleUrl: './dynamicrouting.component.css'
})
export class DynamicroutingComponent {
constructor(private router: Router) {



}

show(){
  this.router.navigate(['addition'])
}

}
