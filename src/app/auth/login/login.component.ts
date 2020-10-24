import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  LoginForm : FormGroup = new FormGroup({
    Email : new FormControl('',Validators.required),
    Password : new FormControl('',Validators.required)
  })
  constructor(public AuthService: AuthService,private dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let email = this.LoginForm.controls.Email.value;
    let password = this.LoginForm.controls.Password.value;
    console.log(email,password);
    this.AuthService.login(email,password);
    this.dialogRef.close();
  }

}
