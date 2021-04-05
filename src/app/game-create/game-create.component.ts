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

  constructor(private gamesService: GamesService, private httpClient: HttpClient) { }

  name = '';
  genre = '';
  release = '';

  error: boolean = false;


  createGame() {
    this.gamesService.postGame(this.name, this.genre, parseInt(this.release, 10))
      .subscribe(
        (data) => {
          console.log(data);
        }, (error) => {
          console.log(error);
          this.error = true;
        }
      );
  }

  ngOnInit(): void {
  }

  /*submit(name:string, genre:string, release:string){
    this.gamesService.
  }*/

}
