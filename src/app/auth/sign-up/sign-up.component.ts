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
  signUpForm : FormGroup = new FormGroup({
    Email : new FormControl('',Validators.required),
    Password : new FormControl('',Validators.required)
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

}
