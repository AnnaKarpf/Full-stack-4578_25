import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: []
})
export class AppComponent {
  optionArray = [
    {
      title: "USA format",
      format: "M/dd/yy"
    },
    {
      title: "UK format",
      format: "dd/M/yy"
    },
    {
      title: "Hour (12h format)",
      format: "h:mm a"
    },
    {
      title: "Hour (24h format)",
      format: "H:mm"
    },
    {
      title: "month",
      format: "MMM"
    },
    {
      title: "day of week",
      format: "EEEE"
    }
  ];
  today = Date.now();
  formatter = "M/dd/yy";

  setFormat(val) {
    this.formatter = val;
  }
}
