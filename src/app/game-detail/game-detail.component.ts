import { Component, OnInit } from '@angular/core';
import {GamesService} from "../games.service";
import {HttpClient} from "@angular/common/http";
import {Game} from "../game.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  game: Game;
  constructor(private gamesService: GamesService, private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(p => {
      const id = parseInt(p.get('id'));
      this.gamesService.getGame(id)
        .subscribe(
          (data: Game) => {
            this.game = data;
            console.log(data);
          }, (error) => {
            console.log(error);
          }
        );
    });
  }

  name = '';
  genre = '';
  release = '';

  edit(id: number) {
    this.gamesService.editGame(id, this.name, this.genre, parseInt(this.release, 10))
      .subscribe(
        (data) => {
          console.log(data);
        }, (error) => {
          console.log(error);
        }
      );
    location.reload();
  }

  ngOnInit(): void {
  }

}
