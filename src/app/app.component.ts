import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  mardik=[
    {
      anun:"Inga",
      azganun:"Grigoryan",
      tariq:28,
      ashxatavard:70000,
      lezuner:["ruseren"]
    },
    {
      anun:"Narek",
      azganun:"Makaryan",
      tariq:25,
      ashxatavard:150000,
      lezuner:["hayeren","ruseren","angleren"]
    },
    {
      anun:"Artur",
      azganun:"Babayan",
      tariq:26,
      ashxatavard:100000,
      lezuner:["hayeren","ruseren","angleren"]
    },
    {
      anun:"Diana",
      azganun:"Sargsyan",
      tariq:50,
      ashxatavard:300000,
      lezuner:["hayeren","ruseren","angleren","parskeren","franseren"]
    }
  ]
  plus(x){
    x.ashxatavard+=5000
  }
  minus(x,i){
    x.ashxatavard-=5000
    
  }
}

