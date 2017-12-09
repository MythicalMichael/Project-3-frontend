import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { User } from "../../models/user.model";

@Component({
  selector: "app-page-profile",
  templateUrl: "./page-profile.component.html",
  styleUrls: ["./page-profile.component.css"]
})
export class PageProfileComponent implements OnInit {
  user = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.usersService.getLoggedInUser().subscribe(data => {
      this.user = data;
    });
  }
}
