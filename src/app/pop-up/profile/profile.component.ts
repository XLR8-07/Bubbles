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
  profileList : Profiles[];

  constructor(public service : YouthService) { }

  ngOnInit(): void {
    
  }

  onClickCV(){
    this.service.getProfiles().subscribe(actionArray2 => {
      this.profileList = actionArray2.map(item2 => {
        return {
          id: item2.payload.doc.id,
          ...item2.payload.doc.data() as Profiles
        } as Profiles;
      })
      console.log(this.profileList);
    });
    
  }

}

