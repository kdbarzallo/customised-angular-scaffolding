import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  languages : string[] = []
  constructor(private localize : LocalizeRouterService, public navigation : NavigationService) {
    this.languages = localize.parser.locales;
    localStorage.setItem('lang', this.localize.parser.currentLang);
    this.navigation.startSaveHistory();
  }

  switchLang(lang : string){
    localStorage.setItem('lang', lang);
    this.localize.changeLanguage(lang, {replaceUrl: true});
    // this.translate.use(lang);
    this.navigation.getHistory().pop();

  }

  ngOnInit(): void {

  }

}
