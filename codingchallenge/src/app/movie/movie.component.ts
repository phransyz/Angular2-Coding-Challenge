import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    moduleId: module.id,
    selector: 'app-movie',
    templateUrl: 'movie.component.html',
    styleUrls: ['movie.component.css'],
    providers: [DataService]
})

export class MovieComponent implements OnInit {

  movies = [];

  constructor(private dataService: DataService) {
        setTimeout(()=> this.movies, 1000);
    }

  ngOnInit() {
        this.dataService.fetchData().subscribe(
            (data) => this.movies = data,
            err => this.logError(err),
            () => console.log('Random Quote Complete')
        );
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }

}
