import { Component } from "@angular/core";
import { DrinkCounterService } from "../shared/services/drink-counter.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  drinkCount;

  constructor(private myService: DrinkCounterService) {
    this.drinkCount = this.myService.drinkInfo;
  }
}
