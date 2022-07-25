import { Component, OnInit } from '@angular/core';
import { ObtainDataService } from '../../../core/services/obtain-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arrData : any = []

  constructor(private obtainDataService : ObtainDataService) {
    this.arrData = this.obtainDataService.getAllFilms();
   }

  ngOnInit(): void {
  }

}
