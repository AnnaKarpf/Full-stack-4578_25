import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-single-student",
  templateUrl: "./single-student.component.html",
  styleUrls: []
})
export class SingleStudentComponent {
  @Input() studentName: string;
  @Input() index: number;

/**
 * EventEmitter
 * Creates an instance of this class that can deliver events (with the emit method)
 */
@Output() onRemove:EventEmitter<number>=new EventEmitter<number>();

  removeStudent(){
      /**
       * emit - delivers a new event with a parameter
       * the parameter that we sent here (CHILD), can be accessed in the PARENT with the `$event` argument
       */
      this.onRemove.emit(this.index);
  }
}
