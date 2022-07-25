import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import {LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings} from '@gilsdav/ngx-translate-router';
import {LocalizeRouterHttpLoader} from '@gilsdav/ngx-translate-router-http-loader';
import {Location} from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeComponent } from './components/maincontent/home/home.component';
import { NotFoundComponent } from './components/maincontent/notfound/notfound.component';
import { CardDetailComponent } from './components/maincontent/home/card-detail/card-detail.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'home/detail/:name/:id', component: CardDetailComponent},
  {path: '404', component: NotFoundComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/404'}
];

export function HttpLoaderFactory(translate: TranslateService, location: Location, settings: LocalizeRouterSettings, http: HttpClient) {
  return new LocalizeRouterHttpLoader(translate, location, { ...settings, alwaysSetPrefix: true }, http);
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locales/', '.json');
}


@NgModule({
  imports: [
    RouterModule.forRoot(routes , {scrollPositionRestoration : 'enabled'}),
    LocalizeRouterModule.forRoot(routes , {
      parser: {
        provide: LocalizeParser,
        useFactory: HttpLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
      }
    })
  ],
  exports: [RouterModule, LocalizeRouterModule]
})
export class AppRoutingModule { }
