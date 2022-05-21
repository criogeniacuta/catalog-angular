import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private defaultLanguage = 'it';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.defaultLanguage);
  }

  public changeLanguage(language: string) {
    this.translate.setDefaultLang(language);
  }

  public switchLanguage() {
    this.defaultLanguage === 'it'? this.defaultLanguage = 'en' : this.defaultLanguage = 'it'
    this.translate.setDefaultLang(this.defaultLanguage);
  }

  public getTranslate() {
    return this.translate;
  }

}
