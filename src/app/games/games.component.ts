import {Component, OnInit} from '@angular/core';
import {GamesService} from "../games.service";
import {HttpClient} from "@angular/common/http";
import {Game} from "../game.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  public Games: Game[];

  constructor(private gamesService: GamesService, private httpClient: HttpClient, private router: Router) {
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

  detailGame(id: number) {
    this.router.navigateByUrl('game/' + id);
  }

  deleteGame(id: number) {
    this.gamesService.deleteGame(id)
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
