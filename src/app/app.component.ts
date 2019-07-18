import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-manager';

  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyAAeB0o4tWunCp4PR-E59MBSFVqZYIHCu0",
      authDomain: "book-manager-e5123.firebaseapp.com",
      databaseURL: "https://book-manager-e5123.firebaseio.com",
      projectId: "book-manager-e5123",
      storageBucket: "book-manager-e5123.appspot.com",
      messagingSenderId: "123625838352",
      appId: "1:123625838352:web:6a37d88f967d51b5"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  }
}
