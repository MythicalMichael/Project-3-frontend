import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

const baseUrl = "http://localhost:3000";

@Injectable()
export class UsersService {
  constructor(private http: Http) {}
  // getAllUsers(): Observable<any> {
  //   return this.http.get(baseUrl + '/user').map((res: Response) => res.json());
  // }
  getOneUser(userid): Observable<any> {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http
      .get(baseUrl + "/user/" + userid)
      .map((res: Response) => res.json());
  }

  getLoggedInUser(): Observable<any> {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http
      .get(baseUrl + "/auth/me", options)
      .map((res: Response) => res.json());
  }
  //////////////////////////////////
  // postJoinRequestPleb(jreqdata): Observable<any> {
  //   // console.log("hello from the other side");
  //   const options = new RequestOptions();
  //   options.withCredentials = true;
  //   return this.http // help
  //     .post(baseUrl + "/flats/request", jreqdata, options)
  //     .map((res: Response) => res.json());
  // }
}
