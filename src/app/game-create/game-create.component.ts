import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Game} from "../game.model";

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})
export class GameCreateComponent implements OnInit {
  private Games: Game[];

  constructor(private gamesService: GamesService, private httpClient: HttpClient) {
    this.gamesService.getGames()
      .subscribe(
        (data: Game[]) => {
          this.Games = data;
          console.log(data);
        }, (error) => {
          console.log(error);
        }
      );
  }

  name = '';
  genre = '';
  release = '';


  createGame() {
    this.gamesService.postGame(this.name, this.genre, parseInt(this.release, 10));
  }

  ngOnInit(): void {
  }

  /*submit(name:string, genre:string, release:string){
    this.gamesService.
  }*/

}
