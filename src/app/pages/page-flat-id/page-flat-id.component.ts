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
  flat: any;
  message: string;
  canRequest: boolean = null;
  clicked: boolean = null;
  user = null;
  lat: number;
  long: number;
  zoom = 4;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flatsService: FlatsService,
    private usersService: UsersService,
    private authService: AuthService
  ) {}

  private canUserRequestToJoin(): boolean {
    // IS NOT THE OWNER AND IS NOT IN FLATMATES YET
    console.log(this.flat);
    if (
      this.user._id === this.flat.author._id ||
      this.flat.declinedFlatmates.includes(this.user._id)
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
  // ask tomorrow something about the numbers
  ngOnInit() {
    this.user = this.authService.getUser();
    this.activatedRoute.params.subscribe(params => {
      this.flatsService.getOneFlat(params.id).subscribe(data => {
        this.flat = data;
        this.canRequest = this.canUserRequestToJoin();
      });
    });
  }

  handleClickRequestToJoin() {
    this.flatsService
      .postJoinRequestPleb(this.flat._id, this.message)
      .subscribe();
    this.clicked = this.buttonsDisappear();
  }
}
