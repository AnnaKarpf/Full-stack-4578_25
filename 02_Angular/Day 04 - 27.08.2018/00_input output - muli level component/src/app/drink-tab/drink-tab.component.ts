import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-drink-tab",
  templateUrl: "./drink-tab.component.html",
  styleUrls: ["./drink-tab.component.css"]
})
export class DrinkTabComponent {
  @Input() drinkName: string;
  @Input() drinkImg: string;

  @Output() addDrink = new EventEmitter<void>();

  callAddEvent(){
      this.addDrink.emit();
  }

}
