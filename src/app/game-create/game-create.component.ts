import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})
export class GameCreateComponent implements OnInit {

  constructor(private readonly gamesService: GamesService,private readonly router: Router) { }

  ngOnInit(): void {
  }

  /*submit(name:string, genre:string, release:string){
    this.gamesService.
  }*/

}
