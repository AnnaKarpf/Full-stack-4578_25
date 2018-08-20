import { Component } from "@angular/core";

@Component({
  selector: "app-coffee",
  templateUrl: "./coffee.component.html",
  styleUrls: ["./coffee.component.css"]
})
export class CoffeeComponent {

  public static counter: number = 0;

  public coffeeIndex: number = 0;
  public spoonsOfSugar: number = 2;

  //every instance of the current component (<app-coffee></app-coffee>) will call the constructor
  constructor() {
    this.coffeeIndex = ++CoffeeComponent.counter;
  }


  getDayPart():string{
      switch(this.coffeeIndex){
          case 1: return "morning";
          case 2: return "afternoon";
          case 3: return "evening";
      }
  }
}
