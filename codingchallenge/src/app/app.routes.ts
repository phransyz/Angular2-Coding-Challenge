import { GameComponent } from "./game/game.component";
import { JokeComponent } from "./joke/joke.component";
import { MovieComponent } from "./movie/movie.component";
import { HomeComponent } from "./home/home.component";
import { provideRouter } from "@angular/router";

//A constant to define the routes for links
const APP_ROUTES = [
  { path: 'game', component: GameComponent },
  { path: 'joke', component: JokeComponent },
  { path: 'movie', component: MovieComponent},
  { path: '', component: HomeComponent }
];

export const APP_ROUTES_PROVIDER = [
  provideRouter(APP_ROUTES)
];
