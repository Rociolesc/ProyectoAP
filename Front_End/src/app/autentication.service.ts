import { Injectable } from '@angular/core';
import {Auth, signInWithEmailAndPassword,signOut} from '@angular/fire/auth'
@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  constructor(private auth:Auth){}
  
  login(email:any, password:any){
    console.log(email, password)
    return signInWithEmailAndPassword(this.auth,email,password);
  }
  logout(){
    return signOut(this.auth);
  }

}
