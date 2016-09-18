import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  moduleId: module.id,
  selector: 'app-game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css'],
    providers: [DataService]
})
export class GameComponent implements OnInit {

  constructor(private dataService: DataService) { }
deck=[];
  ngOnInit() {
    this.dataService.getDeck().subscribe(
      (data) => this.deck = data,
      err => this.logError(err),
      () => console.log('Random Quote Complete')
    );
  }
  logError(err) {
    console.error('There was an error: ' + err);
  }


higher(){

}
lower(){

}

}
