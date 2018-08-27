import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent {
  @Output() passAddEvent = new EventEmitter<void>();
  drinkArray = [
    {
      name: "Water",
      img: "\\assets\\images\\water.jpg"
    },
    {
      name: "Beer",
      img: "\\assets\\images\\beer.jpg"
    },
    {
      name: "Wine",
      img: "\\assets\\images\\wine.jpg"
    }
  ];

  passEvent() {
    this.passAddEvent.emit();
  }
}
