import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  products = [];

  constructor(private api_srv: ApiService,
              private toast: ToastrService) { }

  ngOnInit(): void {}

  apiTest() {
    this.api_srv.get('/products').subscribe(
      data => {
        this.toast.success('Chiamata andata a buon fine', 'Successo');
        console.log(data);
      },
      error => {
        const errorMessage = error.message;
        this.toast.error(errorMessage, 'Errore', {
          timeOut: 5000
        });
        console.error('Error:', errorMessage);
      });
    }

}
