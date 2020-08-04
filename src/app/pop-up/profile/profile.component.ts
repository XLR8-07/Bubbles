import { Component, OnInit } from '@angular/core';
import { YouthService } from 'src/app/shared/youth.service';
import { Profiles } from 'src/app/shared/profiles.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profession : string[] = ['CG-Artist', 'Motion Designer', 'Senior Concept Artist'];
  

  constructor(public service : YouthService) { }

  ngOnInit(): void {
    
  }

  onClickCV(){
    console.log("CV clicked")
  }

}

