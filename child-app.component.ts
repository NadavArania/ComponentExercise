import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-app',
  templateUrl: './child-app.component.html',
  styleUrls: ['./child-app.component.css']
})
export class ChildAppComponent implements OnInit {

  @Input()childInput:string = "";
  @Output()messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendButtonEvent(){
    this.messageEvent.emit("Button Clicked!")
  }

  hiddeAll(){
    this.childInput = "";
    this.messageEvent.emit("");
  }

}
