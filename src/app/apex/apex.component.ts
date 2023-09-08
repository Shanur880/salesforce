import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-apex',
  templateUrl: './apex.component.html',
  styleUrls: ['./apex.component.css']
})
export class ApexComponent {
  constructor(private router: Router,private  location: Location) {}


  navigateToApexPage2() {
    // Use Angular Router to navigate to another component or page
    this.router.navigate(['/apexpage2']);
  }

  navigateToApexPage3() {
    // Use Angular Router to navigate to another component or page
    this.router.navigate(['/apexpage3']);
  }
  goBack() {
    // Go back to the previous page
    this.location.back();
  }
}
