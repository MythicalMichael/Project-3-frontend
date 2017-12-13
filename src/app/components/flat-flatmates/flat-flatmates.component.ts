import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { FlatsService } from "../../services/flats.service";
import { UsersService } from "../../services/users.service";

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
  constructor(
    private activatedRoute: ActivatedRoute,
    private flatsService: FlatsService,
    private usersService: UsersService
  ) {}

  private buttonsDisappear(): boolean {
    // after clicking button
    return true;
  }

  ngOnInit() {}

  handleClickAddToFlatmates(user) {
    console.log(this.flat);
    this.flatsService
      .putAcceptRequest(user, this.flat._id, this.reply)
      .subscribe();
    this.clicked = this.buttonsDisappear();
  }
  handleClickRejectToFlatmates(user) {
    console.log(this.flat);
    this.flatsService
      .putRejectRequest(user, this.flat._id, this.reply)
      .subscribe();
    this.clicked = this.buttonsDisappear();
  }
}
