import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Game} from "./game.model";

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
    return this.httpClient.get("http://localhost:4200/videogame/api/videogames");
  }

  postGame(name: string, genre: string, release: number) {
    const body = new Game(name, genre, release);
    console.log(body);
    const bodyString = JSON.stringify(body);
    this.httpClient.post("http://localhost:4200/videogame/api/videogames", bodyString, {observe: 'response'})
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
