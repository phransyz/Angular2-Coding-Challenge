import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    moduleId: module.id,
    selector: 'app-joke',
    templateUrl: 'joke.component.html',
    styleUrls: ['joke.component.css'],
    providers: [DataService]
})

export class JokeComponent implements OnInit {

    constructor(private dataService: DataService) { }
    joke=[];

    ngOnInit() {
    }

    displayJokes(val: number){
        if(val>0){
            this.dataService.displayJoke(val).subscribe(
                (data) => this.joke = data,
                err => this.logError(err),
                () => console.log('Random Quote Complete')
            );
        }else {
            this.dataService.displayJoke(0).subscribe(
                (data) => this.joke = data,
                err => this.logError(err),
                () => console.log('Random Quote Complete')
            );
        }
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }

}
