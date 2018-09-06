import { Component } from "@angular/core";
import { CountryService } from "../shared/services/country.service";
import { Country } from "../shared/models/country.model";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html"
})
export class CountriesComponent {
  localInfo: any;

  constructor(private myService: CountryService) {
      this.localInfo=this.myService.countryInfo;
  }
  setCountry(land:string){
    this.myService.getFlag(land);
    this.myService.getNativeName(land);
  }

}
