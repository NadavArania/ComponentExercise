import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-app';

  parentMessage:string = "Hello child!";
  btnMessage:string = "";

  btnClicked($event:string){
    this.btnMessage = $event;
  }
}
