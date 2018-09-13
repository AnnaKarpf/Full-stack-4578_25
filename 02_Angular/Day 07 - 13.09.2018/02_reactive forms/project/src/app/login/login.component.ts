
import { Component } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //----------------PROPERTIRS-------------------
  myForm: FormGroup;
 

  //----------------CONSTRUCTOR------------------
  constructor() {
    let formGroupConfig = {
      userName: new FormControl("Test",[
        f => !f.value ? { "err": `name is required` } : null,
        f => f.value && f.value.length > 15 ? { "err": `name is max 15 chars` } : null,
        f => f.value && f.value.length < 3 ? { "err": `name is min 3 chars` } : null
      ]),

      userPassword: new FormControl("123456", [
        f => !f.value ? { "err": `password is required` } : null,
        f => f.value && f.value.length > 10 ? { "err": `password is max 10 chars` } : null,
        f => f.value && f.value.length < 6 ? { "err": `password is min 6 chars` } : null
      ])
    };

    this.myForm = new FormGroup(formGroupConfig);
  }

  //----------------METHODS-------------------
  submitLogin() {
    console.log(this.myForm.value);
    console.log(this.myForm.controls);
    alert(this.myForm.status)
  }

}
