import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  listOfDom: string[] = ['job', 'Tour', 'Drawing', 'Fishing']

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
  }

}
