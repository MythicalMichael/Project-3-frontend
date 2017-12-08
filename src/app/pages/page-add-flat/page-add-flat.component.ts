import { Component, OnInit } from "@angular/core";
import { FlatsService } from "../../services/flats.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { FileUploader } from "ng2-file-upload";

@Component({
  selector: "app-page-add-flat",
  templateUrl: "./page-add-flat.component.html",
  styleUrls: ["./page-add-flat.component.css"]
})
export class PageAddFlatComponent implements OnInit {
  baseUrl = "http://localhost:3000";
  feedbackEnabled = false;
  processing = false;
  flat = {
    filename: "",
    rooms: null,
    price: null
  };
  // author = loggedin user;
  uploader: FileUploader = new FileUploader({
    url: `${this.baseUrl}/flat/upload`
  });

  constructor(private flatsService: FlatsService, private router: Router) {}

  ngOnInit() {}

  submitForm(theForm) {
    console.log(theForm);
    this.feedbackEnabled = true;
    if (theForm.valid) {
      this.processing = true;
      this.uploader.uploadAll();
      this.uploader.onCompleteItem = (item: any, response: string) => {
        const fileData = JSON.parse(response);
        this.flat.filename = fileData.filename;
        this.flatsService
          .createOneFlat(this.flat)
          .subscribe(result => this.router.navigate(["/flat", result.id]));
      };
    }
  }
}
