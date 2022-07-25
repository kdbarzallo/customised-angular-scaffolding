import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GenericCardComponent } from './components/maincontent/home/generic-card/generic-card.component';
import { HomeComponent } from './components/maincontent/home/home.component';
import { NotFoundComponent } from './components/maincontent/notfound/notfound.component';
import { CardDetailComponent } from './components/maincontent/home/card-detail/card-detail.component';
import { SharedModule } from './shared/shared.module';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locales/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GenericCardComponent,
    HomeComponent,
    NotFoundComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide : TranslateLoader,
        useFactory : (createTranslateLoader),
        deps : [HttpClient]
      }
    }),
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
