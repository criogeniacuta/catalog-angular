import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocaleService } from 'src/app/services/locale.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  products = [];

  constructor(private toast: ToastrService,
              private locale: LocaleService) { }

  ngOnInit(): void {}

  switchLanguage() {
    this.locale.switchLanguage();
  }

}
