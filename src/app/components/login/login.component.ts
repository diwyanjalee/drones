import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email    = "";
  password = "";
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  logUser () {
    console.log("eeemail : " , this.email)
    this.loginService.signIn(this.email, this.password).then((res) =>{
      console.log(res.user.uid)
      if (res.user.uid) {
        this.router.navigate(['/']);
      }
      
    })
  }

}
