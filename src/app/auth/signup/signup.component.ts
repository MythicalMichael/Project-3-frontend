import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { User } from "../../models/user.model";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent {
  user = new User({
    username: "",
    email: "",
    password: ""
  });

  error: string;

  constructor(private auth: AuthService, private router: Router) {}

  signup() {
    this.error = null;
    this.auth
      .signup(this.user)
      .subscribe(
        () => this.router.navigate(["/flat"]),
        err => (this.error = err.json().error)
      );
  }
}
