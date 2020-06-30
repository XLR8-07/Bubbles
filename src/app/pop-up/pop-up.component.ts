import { Component, OnInit } from '@angular/core';
import { YouthService } from '../shared/youth.service';
import { Questions } from '../shared/questions.model';

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

  constructor(public service : YouthService) {
    this.changeTheme('red', 'yellow'); // Set default theme
  }

  changeTheme(primary: string, secondary: string) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);
  }

  onClick() {
    this.changeTheme('green', 'black');
  }



}
