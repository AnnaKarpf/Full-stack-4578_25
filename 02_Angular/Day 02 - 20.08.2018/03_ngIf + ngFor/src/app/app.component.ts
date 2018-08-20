import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: []
})
export class AppComponent {
  namesArray: string[] = ["A", "B", "C"];

  studentsArray: string[][] = [
    ["Bob", "Adison", "Tel-Aviv"],
    ["Alice", "Adis", "Haifa"],
    ["Tom", "Karp", "Jerusalem"]
  ];

  //days in js are 0-6
  currentDay = new Date().getDay();

  //all the following are convert to "false" as a boolean value
  prop1 = 0;
  prop2 = "";
  prop3 = null;
  prop4 = undefined;
  prop5 = false;
  prop6 = NaN;
}
