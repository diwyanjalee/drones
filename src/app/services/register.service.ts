import { Injectable, ɵConsole } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import 'firebase/database';

import { Register } from '../models/register.model';
import { EmailValidator } from '../../../node_modules/@angular/forms';

@Injectable({
  providedIn: 'root'
})
 
export class RegisterService {
  private dbPath = '/users';

  usersRef: AngularFireList<Register>;

  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
  ) {
    this.usersRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Register> {
    return this.usersRef;
  }

  createUser(key: any,user: any): any {
    return this.usersRef.update(key, user)
  }

  update(key: string, value: any): Promise<void> {
    
    return this.usersRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.usersRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.usersRef.remove();
  }

  registerUser(user: Register) :Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then((res)=>{
      console.log(res.user)
      if (res.user) {
        let uid = res.user.uid;
        this.createUser(uid,{
          fullname: user.fullname,
          email: user.email,
          address: user.address,
          mobile: user.mobile
        });
      }
      
      return "Success";
    }).catch((err)=>{
      return err.message;
    })
  }
}
