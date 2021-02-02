import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameCreateComponent } from './game-create/game-create.component';

const routes: Routes = [
  {path: 'games', component: GamesComponent},
  {path: 'game/:id', component: GameDetailComponent},
  {path: 'create', component: GameCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
