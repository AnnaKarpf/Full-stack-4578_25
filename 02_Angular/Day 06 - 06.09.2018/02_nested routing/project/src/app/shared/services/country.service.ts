import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Country } from "../models/country.model";
@Injectable()
export class CountryService {
  countryInfo: { list: Country[]; nativeName: string; flag: string } = {
    list: [],
    nativeName: "",
    flag: ""
  };

  getNativeName(country: string) {
    this.myHttp
      .get(`https://restcountries.eu/rest/v2/name/${country}?fields=nativeName`)
      .subscribe(res => {
        this.countryInfo.nativeName = res[0].nativeName;
      });
  }

  getFlag(country: string) {
    this.myHttp
      .get(`https://restcountries.eu/rest/v2/name/${country}?fields=flag`)
      .subscribe(res => {
        this.countryInfo.flag = res[0].flag;
      });
  }

  constructor(private myHttp: HttpClient) {
    this.myHttp
      .get<Country[]>("https://restcountries.eu/rest/v2/all?fields=name")
      .subscribe(res => {
        this.countryInfo.list = res;
      });
  }
}
