import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnInit {

  @Input() rating : number;
  @Output() ratingToParent: EventEmitter<string> = new EventEmitter();
  ratingArr : any = [];

  constructor() { }

  ngOnInit() {
    console.log(this.rating)
    this.ratingArr = Array(Math.round(this.rating)).fill(Math.round(this.rating));
  }

  ratingEvent() {
    this.ratingToParent.emit('Rating value = '+ this.rating);
  }

}
