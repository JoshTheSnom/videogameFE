import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private readonly usersService: UsersService,private readonly router: Router) { }

  ngOnInit(): void {
  }

  username = '';
  email = '';
  password = '';

  submit(){
    this.usersService.register(this.username, this.email, this.password);
  }


}
