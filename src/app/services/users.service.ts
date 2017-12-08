import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
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
    return this.http
      .get(baseUrl + "/user/" + userid)
      .map((res: Response) => res.json());
  }

  // getLoggedInUser(userme){
  //   return this.http
  //     .get(baseUrl + "/user/" + userme)
  //     .map((res: Response) => res.json());
  // }
}
