import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthenticationService {

  private httpClient;
  private baseURL = 'http://localhost:3000/users/';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async getUserInfo(username: string) {

    const user = await this.httpClient.get(this.baseURL + username).toPromise();
    return user;

  }

  loginUser(username: string, password){

  }

  async getAllUsers() {

    const username = 'adminUser';
    const user = await this.httpClient.get(this.baseURL + username).toPromise();
    return user;

  }
}
