import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObtainDataService } from '../../../../core/services/obtain-data.service';
import { NavigationService } from '../../../../core/services/navigation.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  film : any;
  id : string | null = null;

  constructor(private _router: Router,
              private _activatedRouter : ActivatedRoute,
              private _obtainDataService : ObtainDataService,
              public navigation : NavigationService
              )
              {
                this.getParams();
              }

  ngOnInit(): void {}

  getParams(){
    this._activatedRouter.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
        if(this.id == null){
          this._router.navigateByUrl('/404');
        }else{
          this.setFilm(this.id);
        }
      }
    });
  }

  setFilm(id : string){
    let film = this._obtainDataService.getFilmForId(parseInt(id));
    if(film == undefined){
      this._router.navigateByUrl('/404');
    }
    this.film = film;
  }

}
