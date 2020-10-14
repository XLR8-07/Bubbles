import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  hide = true;
  selectedImage: any = null;
  imgSrc : string = '/assets/img/image_placeholder2.png';
  isSubmitted : boolean = false;
  Taglist: string[] = [];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  signUpForm : FormGroup = new FormGroup({
    Name : new FormControl('',Validators.required),
    Email : new FormControl('',Validators.required),
    Password : new FormControl('',Validators.required),
    Work : new FormControl('',Validators.required),
    PhoneNo : new FormControl('',Validators.required),
    imageURL : new FormControl('',Validators.required),
    Address : new FormControl('',Validators.required),
    Description : new FormControl('',Validators.required),
    Proficiency: new FormControl(this.Taglist),
    Job : new FormControl('',Validators.required)
  })

  constructor(public Authservice: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let email = this.signUpForm.controls.Email.value;
    let password = this.signUpForm.controls.Password.value;
    console.log(email,password);
    this.Authservice.signUp(email,password);
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.Taglist.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  remove(Tag: string): void {
    const index = this.Taglist.indexOf(Tag);

    if (index >= 0) {
      this.Taglist.splice(index, 1);
    }
  }

  search(text:any){
    for (let l of text){
      console.log(l)
    }
  }

  
  showPreview(event : any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else{
      this.imgSrc = '/assets/img/image_placeholder2.png';
      this.selectedImage = null;
    }
  }

}
