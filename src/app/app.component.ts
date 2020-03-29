import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data:string="";
  onMouseMove(event: MouseEvent) {
    this.data = "ABC";
   }
 
     public text: String = 'To display ';
   public xboolean=true;
 
 
   
 
   mouseMove() {
     this.xboolean = false;
     
   }
 
  
  title = 'formdemo';
}
