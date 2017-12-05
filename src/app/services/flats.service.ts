import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const baseUrl = 'http://localhost:3000';


@Injectable()
export class FlatsService {

  constructor(private http: Http) {
   }
   getAllFlats(): Observable<any> {
    return this.http.get(baseUrl + '/flat')
    .map((res: Response) => res.json());
   }
   getOneFlat(flatid): Observable<any> {
     return this.http.get(baseUrl + '/flat/' + flatid)
     .map((res: Response) => res.json());
   }
}
