import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

const baseUrl = "http://localhost:3000";

@Injectable()
export class FlatsService {
  constructor(private http: Http) {}

  getAllFlats(): Observable<any> {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http
      .get(baseUrl + "/flat", options)
      .map((res: Response) => res.json());
  }

  getOneFlat(flatid): Observable<any> {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http
      .get(baseUrl + "/flat/" + flatid, options)
      .map((res: Response) => res.json());
  }

  createOneFlat(formData) {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http
      .post(baseUrl + "/flat/add", formData, options)
      .map((res: Response) => res.json());
  }
  postJoinRequestPleb(flatid, message): Observable<any> {
    // console.log("hello from the other side");
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http
      .post(baseUrl + "/flat/" + flatid + "/flatmates", { message }, options)
      .map((res: Response) => res.json());
  }
}
