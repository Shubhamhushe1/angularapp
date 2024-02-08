import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Company, CompanyService } from '../company.service';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css',
})
export class CompanyComponent {
  company: Company = new Company('', '', '', '');

  

  constructor(private companyService: CompanyService) {}

  addCompany() {
    this.companyService.addCompany(this.company).subscribe();
  }

  getCompanyName() {
    this.companyService.getCompanyName(this.company.companyName).subscribe(companyobject=>this.company=companyobject);
  }

}
