import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { FlatsService } from "../../services/flats.service";
import { UsersService } from "../../services/users.service";
import { AuthService } from "../../services/auth.service";
//////////////
import { AgmCoreModule } from "@agm/core";

@Component({
  selector: "app-page-flat-id",
  templateUrl: "./page-flat-id.component.html",
  styleUrls: ["./page-flat-id.component.css"]
})
export class PageFlatIdComponent implements OnInit {
  flat: { _id: null };
  message: string;
  canRequest: boolean;
  clicked: boolean = null;
  user = null;
  ///////////////
  lat = 51.678418;
  lng = 7.809007;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flatsService: FlatsService,
    private usersService: UsersService,
    private authService: AuthService
  ) {}

  private canUserRequestToJoin(): boolean {
    // IS NOT THE OWNER AND IS NOT IN FLATMATES YET
    console.log("bytton", this.flat);
    if (
      this.user._id === this.flat["author"] &&
      this.flat["acepptedFlatmates"].includes(this.user._id) &&
      this.flat["declinedFlatmates"].includes(this.user._id)
    ) {
      return false;
    } else {
      return true;
    }
  }
  private buttonsDisappear(): boolean {
    // after clicking button
    return true;
  }

  ngOnInit() {
    this.user = this.authService.getUser();
    console.log(this.user);
    this.activatedRoute.params.subscribe(params => {
      this.flatsService.getOneFlat(params.id).subscribe(data => {
        this.flat = data;
        console.log("this.flat onng", this.flat);
        this.canRequest = this.canUserRequestToJoin();
      });
    });
  }

  // get the params id to know what id the flat has you want to join and push this id into the flatrequest:{type:[Objectid]}

  handleClickRequestToJoin() {
    this.flatsService
      .postJoinRequestPleb(this.flat._id, this.message)
      .subscribe();
    this.clicked = this.buttonsDisappear();
  }
}
// .putAcceptRequest(this.flat._id, this.user._id, this.reply)
