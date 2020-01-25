import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GameDetailsComponent } from "./game-details/game-details.component";
import { GameComponent } from "./game/game.component";

const routes: Routes = [
  { path: "details", component: GameDetailsComponent },
  { path: "", component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
