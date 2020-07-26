import { Component, OnInit } from '@angular/core';
import { YouthService } from '../shared/youth.service';
import { Questions } from '../shared/questions.model';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { NewQuestionComponent } from './new-question/new-question.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  QuestionList : Questions[];

  ngOnInit(): void {
    this.service.getQuestions().subscribe(actionArray2 => {
      this.QuestionList = actionArray2.map(item2 => {
        return {
          id: item2.payload.doc.id,
          ...item2.payload.doc.data() as Questions
        } as Questions;
      })
    });
  }

  primaryColor: string;
  secondaryColor: string;

  constructor(public service : YouthService, public dialog : MatDialog) {
    this.changeTheme('red', 'yellow'); // Set default theme
  }

  changeTheme(primary: string, secondary: string) {

  }

  onClick() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = false;
    dialogconfig.autoFocus = true;
    dialogconfig.width = "80%";
    this.dialog.open(ProfileComponent,dialogconfig);
  }

  newQuestion(){
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = false;
    dialogconfig.autoFocus = true;
    dialogconfig.width = "60%";
    this.dialog.open(NewQuestionComponent,dialogconfig);
  }



}
