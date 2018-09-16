import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-homeContent',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  static index = 0;
  title: string;
 @Input() msg:boolean;
  constructor() {

    HomeContentComponent.index++;  //static member
    this.title=`component home-comtent - number ${HomeContentComponent.index}`;

    console.log("constructor "+this.title,this.msg);
  }

  // Initialize the directive/component after Angular first displays the
  // data-bound properties and sets the directive/component's input properties.
  // Called once, after the first ngOnChanges().
  // Why to use gnOnInit instead of a constructor:
  // 1. Constructor is meant for init fields, not for doing logic work.
  // 2. Sometimes we need to address other Component's inner properties,
  //    which are not created yet when the constructor is running.
  // 3. It is more easy for testing.
  ngOnInit(): void {
    console.log("ngOnInit "+this.title,this.msg);
  }


  // Respond when Angular (re)sets data-bound input properties.
  // The method receives a SimpleChanges object of current and previous property values.
  // Called before ngOnInit() and whenever one or more data-bound input properties change.
  public ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges "+this.title,changes);
  }


  // Detect and act upon changes that Angular can't or won't detect on its own.
  // Called during every change detection run, immediately after ngOnChanges() and ngOnInit().
  ngDoCheck(): void {
    console.log("ngDoCheck "+this.title);
  }

  // Respond after Angular projects external content into the component's view.
  // Called once after the first ngDoCheck().
  // A component-only hook.
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit "+this.title);
  }

  // Respond after Angular checks the content projected into the component.
  // Called after the ngAfterContentInit() and every subsequent ngDoCheck().
  // A component-only hook.
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked "+this.title);
  }

  // Respond after Angular initializes the component's views and child views.
  // Called once after the first ngAfterContentChecked().
  // A component-only hook.
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit "+this.title);
  }

  // Respond after Angular checks the component's views and child views.
  // Called after the ngAfterViewInit and every subsequent ngAfterContentChecked().
  // A component-only hook.
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked "+this.title);
  }

  // Cleanup just before Angular destroys the directive/component.
  // Unsubscribe Observables and detach event handlers to avoid memory leaks.
  // Called just before Angular destroys the directive/component. 
  ngOnDestroy(): void {
    console.log("ngOnDestroy "+this.title);
  }
}