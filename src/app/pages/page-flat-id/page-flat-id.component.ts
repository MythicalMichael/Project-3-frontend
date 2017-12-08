import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FlatsService } from '../../services/flats.service';

@Component({
  selector: 'app-page-flat-id',
  templateUrl: './page-flat-id.component.html',
  styleUrls: ['./page-flat-id.component.css']
})
export class PageFlatIdComponent implements OnInit {
  flat: object;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flatsService: FlatsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.flatsService
        .getOneFlat(params.id)
        .subscribe(data => (this.flat = data));
      console.log(params.id);
    });
  }
}
