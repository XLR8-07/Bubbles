import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profession : string[] = ['CG-Artist', 'Motion Designer', 'Senior Concept Artist'];

  constructor() { }

  ngOnInit(): void {
  }

}
