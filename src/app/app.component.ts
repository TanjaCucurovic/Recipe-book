import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAuj-mdZ9xZ3Dww93_5m3ictgn4db5gNbk",
      authDomain: "ng-recipe-book-69e7b.firebaseapp.com" 
    });
  }

  onNavigate(feature:string){
    this.loadedFeature = feature;

  }
}
