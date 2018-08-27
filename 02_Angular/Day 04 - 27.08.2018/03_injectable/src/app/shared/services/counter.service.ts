import { MathService } from "./math.service";
import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
  counter = { index: 0 };
  constructor(private myService: MathService) {}
  
  incCounter() {
    this.counter.index = this.myService.incNum(this.counter.index);
  }
}
