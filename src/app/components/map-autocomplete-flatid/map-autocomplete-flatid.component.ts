import {
  Component,
  OnInit,
  ElementRef,
  NgZone,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { FormControl } from "@angular/forms";
import {} from "googlemaps";
import { MapsAPILoader } from "@agm/core";

@Component({
  selector: "app-map-autocomplete-flatid",
  templateUrl: "./map-autocomplete-flatid.component.html",
  styleUrls: ["./map-autocomplete-flatid.component.css"]
})
export class MapAutocompleteFlatidComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  information: Array<any> = [];

  public name: string;

  // public place: google.maps.places.PlaceResult;
  // @Input() location: Object;

  @Output() select = new EventEmitter();

  @ViewChild("search") public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}

  ngOnInit() {
    // set google maps defaults
    this.zoom = 4;
    this.latitude = 41.397852;
    this.longitude = 2.164561;

    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement,
        {
          types: ["address"]
        }
      );
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          console.log(place);
          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;

          this.information.push(place.geometry.location, place.url);
          this.select.emit(this.information);
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}
