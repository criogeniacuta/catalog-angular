import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocaleService } from 'src/app/services/locale.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(private toast: ToastrService,
              private locale: LocaleService) {}

  ngOnInit(): void {}

  showInfo() {
    let title = '';
    this.locale.getTranslate().get('catalog.info').subscribe((t: string) => {
      title = t
    });

    let msg = '';
    this.locale.getTranslate().get('catalog.toast.INFO').subscribe((t: string) => {
      msg = t;
    });

    //this.toast.info('Dovresti saper una cosa', 'Info');
    this.toast.info(msg, title);
  }

  showSuccess(id: number) {
    let title = '';
    this.locale.getTranslate().get('catalog.success').subscribe((t: string) => {
      title = t
    });

    let msg = '';

    switch (id) {
      case 1: {
        this.locale.getTranslate().get('catalog.toast.SUCCESS').subscribe((t: string) => {
          msg = t;
        }); break;
      }
      case 2:
        this.locale.getTranslate().get('catalog.toast.SUCCESS2').subscribe((t: string) => {
          msg = t;
        }); break;
    }
    
    this.toast.success(msg, title);
  }

  showWarning() {
    let title = '';
    this.locale.getTranslate().get('catalog.warning').subscribe((t: string) => {
      title = t
    });

    let msg = '';
    this.locale.getTranslate().get('catalog.toast.ALERT').subscribe((t: string) => {
      msg = t;
    });

    this.toast.warning(msg, title);
  }

  showError() {
    let title = '';
    this.locale.getTranslate().get('catalog.error').subscribe((t: string) => {
      title = t
    });

    this.toast.error('Qualcosa è andato storto', title, {
      timeOut: 500,
      extendedTimeOut: 500
    });
  }

}
