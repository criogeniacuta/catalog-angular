import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {

  public initMaterials = false;
  public waitMaterials = false;
  
  public materials = <any>[];
  public filter = {
    code: '',
    description: '',
    type: '',
    color: '',
    hide_not_avbl: false
  }

  constructor(private api_srv: ApiService,
              private toast: ToastrService) {}

  ngOnInit(): void {}

  public searchMaterials() {
    this.initMaterials = true;
    this.waitMaterials = true;
    
    this.api_srv.get('/products').subscribe(
      data => {
        this.toast.success('Chiamata andata a buon fine', 'Successo');
        this.materials = data;
        this.waitMaterials = false;
      },
      error => {
        const errorMessage = error.message;
        this.toast.error(errorMessage, 'Errore', {
          timeOut: 5000
        });
        console.error('Error:', errorMessage);
        this.waitMaterials = false;
      });
    }
    
    public clearFilter() {
      this.filter = {
        code: '',
        description: '',
        type: '',
        color: '',
        hide_not_avbl: false
      }
    }
}
