import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { FlatsService } from "../../services/flats.service";
import { UsersService } from "../../services/users.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-flat-flatmates",
  templateUrl: "./flat-flatmates.component.html",
  styleUrls: ["./flat-flatmates.component.css"]
})
export class FlatFlatmatesComponent implements OnInit {
  @Input() theFlatmate;
  @Input() flat;
  clicked: boolean = null;
  reply: string;
  authorized = true;
  user = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private flatsService: FlatsService,
    private usersService: UsersService,
    private authService: AuthService
  ) {}

  private buttonsDisappear(): boolean {
    // after clicking button
    return true;
  }
  private checkIfAuthorized() {
    console.log("this user flatmates", this.user);
    if (this.user._id === this.flat.author) {
      this.authorized = false;
      return this.authorized;
    }
  }
  ngOnInit() {
    this.user = this.authService.getUser();
    this.checkIfAuthorized();
  }

  handleClickAddToFlatmates(user) {
    this.flatsService
      .putAcceptRequest(user, this.flat._id, this.reply)
      .subscribe();
    this.clicked = this.buttonsDisappear();
  }
  handleClickRejectToFlatmates(user) {
    this.flatsService
      .putRejectRequest(user, this.flat._id, this.reply)
      .subscribe();
    this.clicked = this.buttonsDisappear();
  }
}
