import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
  ) {}

  signIn(email: string, password: string) :Promise<any> {

    return this.afAuth.signInWithEmailAndPassword(email, password).then((res)=>{
      return res;
    }).catch((err)=>{
      return err.message;
    })
  }
}
