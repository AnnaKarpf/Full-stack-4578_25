import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/services/user-service.services";
import { User } from "../shared/models/user.model";
import { FormGroup, FormControl, ValidatorFn } from "@angular/forms";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit {
  //----------------PROPERTIRS-------------------
  myForm: FormGroup;
  state: string = "login";
  user: User;

  constructor(private myUserService: UserService) {
    this.user = this.myUserService.currentUser;

    let formGroupConfig = {
      userName: new FormControl("Test", [
        f => (!f.value && !f.pristine ? { err: `name is required` } : null),
        f => f.value && f.value.length > 15 ? { err: `name is max 15 chars` }: null,
        f =>f.value && f.value.length < 3 ? { err: `name is min 3 chars` } : null
      ]),

      userPassword: new FormControl("123456", [
        f => (!f.value && ! f.pristine  ? { err: `password is required` } : null),
        f => f.value && f.value.length > 70? { err: `password is max 70 chars` } : null,
        f =>f.value && f.value.length < 6? { err: `password is min 6 chars` }: null
      ])
    };

    this.myForm = new FormGroup(formGroupConfig);
  }

  changeState(newState: string) {
    this.state = newState;
  }

  loginUser() {
    this.myUserService.loginUser({
      userName: this.myForm.value.userName,
      password: this.myForm.value.userPassword
    });
    this.myForm.reset();

    
  }
  registerUser() {
    this.myUserService.registerUser({
      firstName: "Bob",
      lastName: "Bryce",
      userName: "AliceB",
      password: "36bbe50ed96841d10443bcb670d6554f0a34b761be67ec9c4a8ad2c0c44ca42c"
    });
  }

  logout() {
    this.myUserService.currentUser.userName = "Guest";
    this.myUserService.currentUser.token = undefined;
  }
  ngOnInit() {}
}
