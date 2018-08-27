import { Component } from '@angular/core';
import { CounterService } from '../shared/services/counter.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html'
})
export class Child1Component{

    constructor(private myService: CounterService) {}

    onBtnClick(){
        this.myService.incCounter();
    }
}
