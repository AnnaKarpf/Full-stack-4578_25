import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { BambaComponent } from "./bamba/bamba.component";
import { PizzaComponent } from "./pizza/pizza.component";

const appRoutes: Routes = [
  { path: "router2/pizza", component: PizzaComponent },
  { path: "router2/bamba", component: BambaComponent },
  { path: "router2",pathMatch: 'full', redirectTo:"/router2/pizza" }
];

@NgModule({
  declarations: [AppComponent, BambaComponent, PizzaComponent],
  imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
