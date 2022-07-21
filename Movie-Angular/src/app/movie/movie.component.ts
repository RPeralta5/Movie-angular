import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Movie = {
      name: "Ratatouille",
      category: "Animated",
      rating: 4.8
   }

  constructor() { }

  ngOnInit(): void {
  }

}
