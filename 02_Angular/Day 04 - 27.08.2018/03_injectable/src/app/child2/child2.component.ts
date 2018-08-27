import { Component} from "@angular/core";
import { CounterService } from "../shared/services/counter.service";

@Component({
  selector: "app-child2",
  templateUrl: "./child2.component.html"
})
export class Child2Component{
  localIndex;
  constructor(private myService: CounterService) {
    this.localIndex = this.myService.counter;
  }
}
