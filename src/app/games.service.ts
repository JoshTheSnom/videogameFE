import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface IGameEntity {
  name: string;
  genre: string;
  release: string;
}

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpClient: HttpClient) { }
  getGames(){
    return this.httpClient.get("http://localhost:8080/videogame/api/videogames");
  }
}
