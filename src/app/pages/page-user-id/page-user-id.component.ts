import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { UsersService } from "../../services/users.service";

@Component({
  selector: "app-page-user-id",
  templateUrl: "./page-user-id.component.html",
  styleUrls: ["./page-user-id.component.css"]
})
export class PageUserIdComponent implements OnInit {
  user: object;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.usersService
        .getOneUser(params.id)
        .subscribe(data => (this.user = data));
      console.log(params.id);
    });
  }
}
