import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss']
})
export class GenericCardComponent implements OnInit {

  @Input() film : any;
  constructor() { }

  ngOnInit(): void {
  }

}
