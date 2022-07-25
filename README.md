
# Customised Angular Scaffolding

Scaffolding prepared to work with card type components with detail page. The translation system on strings and routes is also implemented.

By default, as an example, Marvel movies are displayed.

![screenshot](https://i.ibb.co/brQCdH2/custom-angular-scaffolding-cards.gif)

## Table of contents

1. [Scaffolding structure](#structure)
2. [Which libraries do I use?](#which-library-use)
3. [Components](#components)
4. [Routing](#routing)
5. [Services](#services)
6. [Sharing Data Between Child and parent components](#sharing-data)
7. [Extras](#extras)
8. [How to use](#how-to-use)

## Scaffolding structure[](#structure)

<details><summary><b>See project structure</b></summary>

   ````
    ├── src
    |  ├── app
    |  |  ├── components
    |  |  |  ├── footer
    |  |  |  |  ├── footer.component.html
    |  |  |  |  ├── footer.component.scss
    |  |  |  |  ├── footer.component.spec.ts
    |  |  |  |  └── footer.component.ts
    |  |  |  ├── header
    |  |  |  |  ├── header.component.html
    |  |  |  |  ├── header.component.scss
    |  |  |  |  ├── header.component.spec.ts
    |  |  |  |  └── header.component.ts
    |  |  |  └── maincontent
    |  |  |     ├── home
    |  |  |     |   ├── card-detail
    |  |  |     |   |  ├── card-detail.component.html
    |  |  |     |   |  ├── card-detail.component.scss
    |  |  |     |   |  ├── card-detail.component.spec.ts
    |  |  |     |   |  └── card-detail.component.html
    |  |  |     |   ├── generic-card
    |  |  |     |   |  ├── generic-card.component.html
    |  |  |     |   |  ├── generic-card.component.scss
    |  |  |     |   |  ├── generic-card.component.spec.ts
    |  |  |     |   |  └── generic-card.component.ts
    |  |  |     |   ├── home.component.html
    |  |  |     |   ├── home.component.scss
    |  |  |     |   ├── home.component.spec.ts
    |  |  |     |   └── home.component.ts
    |  |  |     └── notfound
    |  |  |        ├── notfound.component.html
    |  |  |        ├── notfound.component.scss
    |  |  |        ├── notfound.component.spec.ts
    |  |  |        └── notfound.component.ts
    |  |  ├── core
    |  |  |  └── services
    |  |  |     ├── navigation.service.spec.ts
    |  |  |     ├── navigation.service.ts
    |  |  |     ├── obtain-data.service.spec.ts
    |  |  |     └── obtain-data.service.ts
    |  |  ├── shared
    |  |  |  ├── directives
    |  |  |  |  ├── lazy-loading-img.directive.spec.ts
    |  |  |  |  └── lazy-loading-img.directive.ts
    |  |  |  ├── pipes
    |  |  |  |  ├── slug-generator.pipe.spec.ts
    |  |  |  |  └── slug-generator.pipe.ts
    |  |  |  └── shared.module.ts
    |  |  ├── app-routing.module.ts
    |  |  ├── app.component.html
    |  |  ├── app.component.scss
    |  |  ├── app.component.spec.ts
    |  |  ├── app.component.ts
    |  |  └── app.module.ts
    |  ├── assets
    |  |  ├── locales
    |  |  |  ├── en.json
    |  |  |  └── es.json
    |  |  ├── media
    |  |  |   └── *default media images*.jpg
    |  |  └── locales.json
    |  ├── environments
    |  |  ├── environment.prod.ts
    |  |  └── environment.ts
    |  ├── favicon.ico
    |  ├── index.html
    |  ├── main.ts
    |  ├── polyfills.ts
    |  ├── styles.scss
    |  └── test.ts
    ├── angular.json
    ├── karma.config.js
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tsconfig.app.json
    ├── tsconfig.json
    └── tsconfig.spec.json

   ````
</details>



## Which libraries do I use?[](#which-library-use)

The main libraries I have installed in the project are the following: 
- [bootstrap v5.2.0](#bootstrap)
- [@ngx-translate v14.0.0](#ngx-translate)
- [@gilsdav/ngx-translate-router 4.0.1](#ngx-translate-router)

### Boostrap[](#bootstrap)

This is the CSS framework that the application works with by default. Apart from the boostrap library, I had to install the jquery v3.6.0 and @popperjs/core v2.11.5 libraries for the correct functioning of the predefined bootstrap components.

For the icons I used the bootstrap-icons v1.9.1 library.

[More info about bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)

### Ngx-translate[](#ngx-translate)

This library by itself allows me to translate the static text strings of the application so that when I change the language via a selector or button the displayed text is translated accordingly.

There is no loader available, but I use the TranslateHttpLoader provided by ngx-translate itself with the @ngx-translate/http-loader v7.0 repository which will load translations from files using HttpClient.


By default it handles both English and Spanish translations.


[More info about @ngx-translate](https://github.com/ngx-translate/core)

### Ngx-translate-router[](#ngx-translate-router)

Working together with Ngx-translate, it allows me to go a step further and define the localisation of the routes by prefixing the languages that are added to the route, this allows the translation of both the texts and the actual routes.

[More info about @ngx-translate-router](https://github.com/gilsdav/ngx-translate-router)



## Components[](#components)

- **Footer**
- **Header**
- **Home** : Main page displaying the cards components
- **Generic-card** : Component which is responsible for printing the data of the object via the value passed by Home component.
- **Card-detail** : This is the object detail page, where through an id extracted from the url, it launches a call to the service to return the corresponding object.
- **NotFound** : Page displaying a 404 error when the url could not be found
## Routing[](#routing)

The default routes set in the app-routing.module.ts are as follows: 

```
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'home/detail/:name/:id', component: CardDetailComponent},
  {path: '404', component: NotFoundComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/404'}
];

```

### How do I retrieve the parameters from the url?

In this case I have chosen to retrieve the parameters through a paramMap subscription, this will allow me to retrieve the last parameter value and update the component accordingly.

```

export class CardDetailComponent {

  constructor(private _router: Router,
              private _activatedRouter : ActivatedRoute,
              private _obtainDataService : ObtainDataService,
              public navigation : NavigationService
              )
              { this.getParams(); }

  getParams(){
    this._activatedRouter.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
        if(this.id == null){
          this._router.navigateByUrl('/404');
        }else{
          this.setObject(this.id);
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

```
## Services[](#services)

### ObtainDataService
It was created to deal with sample data and calls. 

It contains basic getter methods for the realisation of the marvel movies example.

It also contains an array of objects with the marvel movies.

```
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

  getAllFilms(){ return peliculas; }
}

```

### NavigationService

Service created to save route history to build a back button.

Code extracted from : https://medium.com/quick-code/go-back-button-in-angular-save-route-history-in-angular-374f28c4a793

```
@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private history: Array<string> = []

  constructor(private router: Router, private location: Location, private localize : LocalizeRouterService) { }

  public startSaveHistory():void{
    this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.history.push(event.urlAfterRedirects);
        }
      })
  }

  public getHistory(): string[] { return this.history; }

  public goBack(): void {
    this.history.pop();

    if (this.history.length > 0) {
      this.location.back();
    } else {
      let translatedPath: any = this.localize.translateRoute('/');
      this.router.navigateByUrl(translatedPath);
    }
  }

  public getPreviousUrl(): string {
    if (this.history.length > 0) {
        return this.history[this.history.length - 2];
    }

    return '';
  }
}

```
## Sharing data between child and parent components[](#sharing-data)

I have used the @Input decorator in the generic-card component so that I can pass from the parent component, in this case home-component, a value to display.

### Generic Card component
**TS**:
```
export class GenericCardComponent implements OnInit {

  @Input() film : any;
  constructor() { }

  ngOnInit(): void {}
}

```
**HTML**:
```

<article class="card-content">
  <a class="card-content-link d-block w-100 h-100" [routerLink]="['./detail/',film.name | slugify ,film.id] | localize">
    <figure class="card-figure-container w-100 h-100">
      <picture class="card-picture w-100 h-100">
        <img [src]="film.img" class="card-img-top w-100 h-100" alt="">
      </picture>
      <figcaption class="card-caption d-flex flex-column justify-content-end text-center">
        <div class="card-caption-container">
          <div class="card-summary mx-4">
            <h2>{{ film.name}}</h2>
          </div>
          <div class="card-details">
            <hr class="mx-4">
            <ul class="d-flex justify-content-evenly card-details-list p-0">
              <li class="card-details-item">
                <small>Atribute</small>
                <span>{{ film.year}}</span>
              </li>
              <li class="card-details-item">
                <small>Atribute</small>
                <span>{{ film.year}}</span>
              </li>
            </ul>
          </div>
        </div>
      </figcaption>
    </figure>
  </a>
</article>

```

### Home Component
**HTML**:
```
<section class="container">
  <section class="row g-4">
    <div *ngFor="let data of arrData" class="col-12 col-lg-4">
      <app-generic-card [film]="data"></app-generic-card>
    </div>
  </section>
</section>

```

## Extras[](#extras)
### Directives
#### Lazy-loading-img
I have created this directive that affects all html <img> elements, it allows me to set the loading attribute to lazy. This causes all images on the page to load in delay until they get close to the browser's display field.
```
@Directive({
  selector: 'img'
})
export class LazyLoadingImgDirective {
  constructor({nativeElement} : ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;
    if (supports) nativeElement.setAttribute('loading', 'lazy');
   }
}
```

### Pipes
#### Slug-generator
This pipe allows me to transform a text string to a slug, removing and replacing whitespace, diacritics, punctuation marks and transforming it to lowercase.
```
@Pipe({
  name: 'slugify'
})
export class SlugGeneratorPipe implements PipeTransform {
  transform(value: string): string {
    return value.trim()
                .replace(/\s+/g, '-')
                .toLowerCase()
                .normalize("NFD")
                .replace(/\p{Diacritic}/gu, "")
                .replace(/[*+~.()'"!:@]/g, "");
  }
}

```
## How To Use[](#how-to-use)

First install dependencies
```
npm install
```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.



