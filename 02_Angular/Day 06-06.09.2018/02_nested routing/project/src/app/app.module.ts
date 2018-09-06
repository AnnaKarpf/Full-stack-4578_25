import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryService } from "./shared/services/country.service";
import { FlagComponent } from './flag/flag.component';
import { NativeNameComponent } from './native-name/native-name.component';

const appRoutes: Routes = [
  { path: "router3/home", component: HomeComponent },
  { path: "router3/countries", component: CountriesComponent ,
children:[
    { path: "flag", component: FlagComponent },
    { path: "nativeName", component: NativeNameComponent }
]},
  { path: "router3",pathMatch: 'full', redirectTo:"/router3/home" }
];

@NgModule({
  declarations: [AppComponent,  HomeComponent, CountriesComponent, FlagComponent, NativeNameComponent],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
