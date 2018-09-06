import { Component } from '@angular/core';
import { CountryService } from '../shared/services/country.service';

@Component({
  selector: 'app-native-name',
  templateUrl: './native-name.component.html'
})
export class NativeNameComponent  {
    localInfo: any;

    constructor(private myService: CountryService) {
        this.localInfo=this.myService.countryInfo;
    }
  
}
