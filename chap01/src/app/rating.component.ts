import { Component } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html'
})

export class RatingComponent {
  rating = 0;

  onClick(ratingValue){
    this.rating = ratingValue;
  }
}
