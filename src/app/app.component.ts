import { Component } from '@angular/core';
import {UsersService} from "./users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'videogameFE';

  constructor(private readonly usersService: UsersService) { }

  error = this.usersService.isError;
}
