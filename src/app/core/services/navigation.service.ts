import { Injectable } from '@angular/core';
import { Location } from '@angular/common'
import { Router, NavigationEnd } from '@angular/router'
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

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

  public getHistory(): string[] {
    return this.history;
  }

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
