
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {User} from "../user.model";

export interface IUserEntity {
  id: number;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: IUserEntity[] = [];

  constructor(private httpClient: HttpClient) { }

  public isError: boolean = false;
  id = 0;

  getIfError(){
    return this.isError;
  }

  register(username: string, email: string, password: string) {
    const body = new User(username, email, password);
    console.log(body);
    return this.httpClient.post("http://localhost:4200/videogame/api/authentication/register", body, {observe: 'response'});
  }

  login(username: string, email: string, password: string) {
    const body = new User(username, email, password);
    console.log(body);
    return this.httpClient.post("http://localhost:4200/videogame/api/authentication/login", body, {observe: 'response'});
  }

}
