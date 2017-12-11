import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { FlatsService } from "../../services/flats.service";
import { UsersService } from "../../services/users.service";

@Component({
  selector: "app-page-flat-id",
  templateUrl: "./page-flat-id.component.html",
  styleUrls: ["./page-flat-id.component.css"]
})
export class PageFlatIdComponent implements OnInit {
  flat: { _id: null };
  message: string;
  canRequest: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flatsService: FlatsService,
    private usersService: UsersService
  ) {}

  private canUserRequestToJoin(): boolean {
    // IS NOT THE OWNER AND IS NOT IN FLATMATES YET
    return true;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.flatsService.getOneFlat(params.id).subscribe(data => {
        this.flat = data;
        this.canRequest = this.canUserRequestToJoin();
      });
    });
  }

  // get the params id to know what id the flat has you want to join and push this id into the flatrequest:{type:[Objectid]}

  handleClickRequestToJoin() {
    this.flatsService
      .postJoinRequestPleb(this.flat._id, this.message)
      .subscribe();
  }
}
//  this.usersService.postJoinRequestPleb(this.jreqdata).subscribe();
