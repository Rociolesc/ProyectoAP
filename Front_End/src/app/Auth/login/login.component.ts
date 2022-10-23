import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup, Validators}from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!:FormGroup;
  formG() {
    this.form = new FormGroup({
      userName: new FormControl(),
      password: new FormControl()
    });
  }
  constructor(private formBuilder:FormBuilder) {
    this.form= this.formBuilder.group(
      {
        userName: [, [Validators.required,Validators.minLength(7)]],
        password: [, [Validators.required,Validators.minLength(7)]]
      }
    )
   }

  ngOnInit(): void {
  }

  get UserName()
  {
    return this.form.get('userName');
  }
  get Password()
  {
    return this.form.get('password');
  }


}
