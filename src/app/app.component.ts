import { Component } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bubbles';
  constructor(private dialog : MatDialog){
    
  }

  onClick(){
    console.log("Field CLICKED!");
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = false;
    dialogconfig.autoFocus = true;
    dialogconfig.width = "60%";
    this.dialog.open(PopUpComponent,dialogconfig);
  }
}
