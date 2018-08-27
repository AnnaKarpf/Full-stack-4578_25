import { Component, Input, Output, EventEmitter } from "@angular/core";
import { DrinkCounterService } from "../shared/services/drink-counter.service";

@Component({
  selector: "app-drink-tab",
  templateUrl: "./drink-tab.component.html",
  styleUrls: ["./drink-tab.component.css"]
})
export class DrinkTabComponent {
  @Input() drinkName: string;
  @Input() drinkImg: string;

  constructor(private myService:DrinkCounterService){

  }

  callAddEvent(){ 
      this.myService.incCounter(this.drinkName);
  }

}
