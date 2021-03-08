import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameCreateComponent } from './game-create/game-create.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GamesComponent } from './games/games.component';
import {HttpClientModule} from "@angular/common/http";
import {GamesService} from "./games.service";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCreateComponent,
    GameDetailComponent,
    GamesComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
