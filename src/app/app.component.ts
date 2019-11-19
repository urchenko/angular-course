import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild('form', {static: false}) signupForm: NgForm;
public defaultSubscription: string = 'Advanced';
public user = {
  inputEmail: '',
  subscriptions: '',
  inputPassword: '',
};
public submited = false;

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  // onSubmit(form: ElementRef) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submited = true;
    this.user.inputEmail = this.signupForm.value.inputEmail;
    this.user.subscriptions = this.signupForm.value.subscriptions;
    this.user.inputPassword = this.signupForm.value.inputPassword;
  }
}
