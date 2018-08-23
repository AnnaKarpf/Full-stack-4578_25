import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  imgSrc: string = "\\assets\\images\\summer.jpg";
  title = "summer";
  userName = "Bob";

  
  onButtonClick() {
    this.title = this.title == "summer" ? "winter" : "summer";
    this.imgSrc = `\\assets\\images\\${this.title}.jpg`;
  }


  onNameChange(newName:string) {
    this.userName=newName;
  }
}
