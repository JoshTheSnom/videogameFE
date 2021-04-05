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

  public isError: boolean = false;

  constructor(private httpClient: HttpClient) { }
  getGames(){
    return this.httpClient.get("http://localhost:4200/videogame/api/videogames");
  }

  postGame(name: string, genre: string, release: number) {
    const body = new Game(0,name, genre, release);
    console.log(body);
    return this.httpClient.post("http://localhost:4200/videogame/api/videogames", body, {observe: 'response'});
  }

  getGame(id: number){
    console.log(id);
    return this.httpClient.get("http://localhost:4200/videogame/api/videogames/"+id);
  }

  deleteGame(id:number){
    console.log(id);
    return this.httpClient.delete("http://localhost:4200/videogame/api/videogames/"+id);
  }

  editGame(id: number, name: string, genre: string, release: number) {
    const body = new Game(id ,name, genre, release);
    console.log(body);
    return this.httpClient.put("http://localhost:4200/videogame/api/videogames/"+id, body, {observe: 'response'});
  }

}
