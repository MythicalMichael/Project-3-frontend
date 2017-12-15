import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { User } from "../../models/user.model";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  user = new User({
    username: "",
    password: ""
  });

  error: string;

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.error = null;
    this.auth
      .login(this.user)
      .subscribe(
        () => this.router.navigate(["/flat"]),
        err => (this.error = err.json().error)
      );
  }
}
