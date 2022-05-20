import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public defaultLanguage = 'it'

  constructor(private toast: ToastrService,
              private translate: TranslateService) {
    translate.setDefaultLang(this.defaultLanguage);
  }

  ngOnInit(): void {}

  switchLanguage() {
    this.defaultLanguage === 'it'? this.defaultLanguage = 'en' : this.defaultLanguage = 'it'
    this.translate.setDefaultLang(this.defaultLanguage);
  }

  showInfo() {
    let title = '';
    this.translate.get('catalog.info').subscribe((t: string) => {
      title = t
    });

    let msg = '';
    this.translate.get('catalog.toast.INFO').subscribe((t: string) => {
      msg = t;
    });

    //this.toast.info('Dovresti saper una cosa', 'Info');
    this.toast.info(msg, title);
  }

  showSuccess(id: number) {
    let title = '';
    this.translate.get('catalog.success').subscribe((t: string) => {
      title = t
    });

    let msg = '';

    switch (id) {
      case 1: {
        this.translate.get('catalog.toast.SUCCESS').subscribe((t: string) => {
          msg = t;
        }); break;
      }
      case 2:
        this.translate.get('catalog.toast.SUCCESS2').subscribe((t: string) => {
          msg = t;
        }); break;
    }
    
    this.toast.success(msg, title);
  }

  showWarning() {
    let title = '';
    this.translate.get('catalog.warning').subscribe((t: string) => {
      title = t
    });

    let msg = '';
    this.translate.get('catalog.toast.ALERT').subscribe((t: string) => {
      msg = t;
    });

    this.toast.warning(msg, title);
  }

  showError() {
    let title = '';
    this.translate.get('catalog.error').subscribe((t: string) => {
      title = t
    });

    this.toast.error('Qualcosa è andato storto', title, {
      timeOut: 500,
      extendedTimeOut: 500
    });
  }
}
