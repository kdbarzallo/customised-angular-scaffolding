import { Injectable } from '@angular/core';

const peliculas : Array<any> = [
  {id: 1001 , name : 'Capitan America: El primer vengador', year : 2011, img : 'assets/media/capitan-america-poster.jpg'},
  {id: 1002 , name : 'Capitana Marvel', year : 2019, img : 'assets/media/capitana-marvel-poster.jpg'},
  {id: 1003 , name : 'Iron Man', year : 2008, img : 'assets/media/iron-man-poster.jpg'},
  {id: 1004 , name : 'Iron Man 2', year : 2010, img : 'assets/media/iron-man-2-poster.jpg'}

]


@Injectable({
  providedIn: 'root'
})
export class ObtainDataService {

  constructor() { }

  getFilmForId( id : number ){

    return peliculas.find((pelicula) => pelicula.id == id);
  }

  getFilmForYear(year : number){
    return peliculas.find((pelicula) => pelicula.year == year);

  }

  getAllFilms(){
    return peliculas;
  }
}
