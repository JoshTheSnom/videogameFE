import {Component, OnInit} from '@angular/core';
import {GamesService} from "../games.service";
import {HttpClient} from "@angular/common/http";
import {Game} from "../game.model";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  public Games: Game[];

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

  ngOnInit(): void {
  }


}
