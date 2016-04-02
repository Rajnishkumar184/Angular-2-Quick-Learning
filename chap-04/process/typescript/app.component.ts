import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  templateUrl: 'partials/app.html'
})

export class AppComponent {
    
     name = 'Ray';
    artists = ['Barot Bellingham', 'Jonathan Ferrar', 'Hillary Post'];

    onClick(myName) {
    this.name = myName;
    }

    addArtist(myArtist) {
    this.artists.push(myArtist);
    }
}
