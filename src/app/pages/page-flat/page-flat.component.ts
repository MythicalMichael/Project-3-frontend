import { Component, OnInit } from '@angular/core';
// Import Services
import { FlatsService} from '../../services/flats.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-flat',
  templateUrl: './page-flat.component.html',
  styleUrls: ['./page-flat.component.css']
})
export class PageFlatComponent implements OnInit {

flats = null;

  constructor(private flatsService: FlatsService,  private router: Router) { }

  ngOnInit() {
    this.flatsService.getAllFlats()
    .subscribe(data => {
     this.flats = data;
   });
  }


  handleClick() {
    this.router.navigate(['/flat/', this.flats._id]);

  }
}
