import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register.model';
import { RegisterService } from '../../services/register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : Register= {
    fullname: "",
    address: "",
    email: "",
    mobile: "",
    registered: false,
    password: ""
  };

  submitted = false;
  constructor(private registerService: RegisterService, private router: Router) {
   }

  ngOnInit(): void {
  }
  saveUser(): void {
    // this.registerService.createUser(this.user).then(() => {
    //   console.log('Created new item successfully!');
    //   this.submitted = true;
    // });
  }

  registerUser(): void {

    this.submitted = false;

    this.registerService.registerUser(this.user).then((res)=>{
       
        if (res === "Success") {
          // print success message for 3 sec and redirect to loging page
          this.router.navigate(['/login']);
          
        }
        else {
          alert(res)
        }
      })
      

   }

}
