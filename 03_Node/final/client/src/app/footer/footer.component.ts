import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  adminName: string = "John Bryce - full stack";
  currentYear:number=(new Date()).getFullYear();
}
