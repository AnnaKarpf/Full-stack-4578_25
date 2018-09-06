import { Component, OnInit } from '@angular/core';
import { CountryService } from '../shared/services/country.service';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html'
})
export class FlagComponent {

    localInfo: any;

    constructor(private myService: CountryService) {
        this.localInfo=this.myService.countryInfo;
    }
  

}
