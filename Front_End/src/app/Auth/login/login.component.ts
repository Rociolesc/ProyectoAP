import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup, Validators}from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/app/autentication.service';
import { Login } from 'src/app/Model/login.model';

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
  constructor(private formBuilder:FormBuilder,private autenticationService:AutenticationService, private ruta:Router) {
    this.form= this.formBuilder.group(
      {
        email: [, [Validators.required,Validators.minLength(7)]],
        password: [, [Validators.required,Validators.minLength(7)]]
      }
    )
   }

  ngOnInit(): void {
  }
mensaje(){
  this.mensajeError = false;
}

mensajeError:boolean=false;
  onEnviar(){
    let email=this.form.value.email + "@gmail.com"
    this.autenticationService.login(email,this.form.value.password)
    .then(response => {
      console.log(response)
      this.ruta.navigate(["/edit"])
    }).catch(error => this.mensajeError = true);
  }

}
