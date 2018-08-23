import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  studentArr: string[] = [];

  addStudent(newStudent: string) {
    this.studentArr.push(newStudent);
  }

  removeFromArr(index: number) {
    this.studentArr.splice(index, 1);
  }
}
