import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  listOfDom: string[] = ['job', 'Tour', 'Drawing', 'Fishing']

  constructor() { }

  ngOnInit(): void {
  }

}
