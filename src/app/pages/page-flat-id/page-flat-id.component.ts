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
  canRequest: boolean;
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
    if (
      this.user._id === this.flat["author"] ||
      this.flat["requested"].includes(this.user._id)
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
        console.log(this.flat);
        console.log(this.flat.flatLocation[0].lat);
        this.canRequest = this.canUserRequestToJoin();
      });
    });
    this.lat = 2;
    // this.lat = this.flat["flatLocation"].lat;
    this.long = 2;
    // this.long = this.flat["flatLocation"].long;
    console.log("this.flat onng", this.flat);
  }

  handleClickRequestToJoin() {
    this.flatsService
      .postJoinRequestPleb(this.flat._id, this.message)
      .subscribe();
    this.clicked = this.buttonsDisappear();
  }
}
