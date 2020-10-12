import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  hide = true;
  selectedImage: any = null;
  imgSrc : string = '/assets/img/image_placeholder.jpg';
  isSubmitted : boolean = false;

  signUpForm : FormGroup = new FormGroup({
    Name : new FormControl('',Validators.required),
    Email : new FormControl('',Validators.required),
    Password : new FormControl('',Validators.required),
    Work : new FormControl('',Validators.required),
    PhoneNo : new FormControl('',Validators.required),
    imageURL : new FormControl('',Validators.required)


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

  
  showPreview(event : any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else{
      this.imgSrc = '/assets/img/image_placeholder.jpg';
      this.selectedImage = null;
    }
  }

}
