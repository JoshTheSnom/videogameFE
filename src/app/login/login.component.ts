import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly usersService: UsersService,private readonly router: Router) { }

  ngOnInit(): void {
  }

  username = '';
  email = 'lorem@ipsum.com';
  password = '';

  submit(){
    this.usersService.login(this.username, this.email, this.password);
  }

}
