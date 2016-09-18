import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http, private jsonp: Jsonp) {

  }
   fetchData(){
    return this.jsonp.get('https://api.themoviedb.org/3/movie/278927?api_key=fd35dcdcfbba840ef2f9ea42c5c55869&callback=JSONP_CALLBACK').map(
      (res) =>{let data = res.json();
    return data;
  }
);
}


displayJoke(val){
  return this.jsonp.get('https://api.icndb.com/jokes/random/'+val+'?callback=JSONP_CALLBACK').map(
    (res) =>{let data = res.json();
      console.log(data);
  return data;
}
);

}


getDeck(){
  return this.http.get('http://deckofcardsapi.com/api/deck/new/draw/?count=2').map(
      (res) =>{let data = res.json();
        console.log(data.cards);
        console.log(data);
        console.log(data.cards[0].value);
      return data.cards;
     }
    );
}
}
