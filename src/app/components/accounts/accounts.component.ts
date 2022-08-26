import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Register } from '../../models/register.model';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit, OnChanges {

  currentUser:Register= {
    fullname: "",
    address: "",
    email: "",
    mobile: "",
    registered: false,
    password: ""
  }
  message = '';

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
  //  this.currentUser = { ...this.user };
  }

  updateRegistered(status: boolean): void {
    if (this.currentUser.key) {
      this.registerService.update(this.currentUser.key, {registered: status })
      .then(() => {
        this.currentUser.registered = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updateUser(): void {
    const data = {
      sname: this.currentUser.fullname,
      course: this.currentUser.mobile
    };

    if (this.currentUser.key) {
      this.registerService.update(this.currentUser.key, data)
        .then(() => this.message = 'The admin was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteUser(): void {
    if (this.currentUser.key) {
      this.registerService.delete(this.currentUser.key)
        .then(() => {

          this.message = 'The admin was deleted successfully!';
        })
        .catch(err => console.log(err));
    }
  }


}
