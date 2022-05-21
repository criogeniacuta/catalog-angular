import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private currentPage = 'Home';

  //TODO: utilizzare le Root
  constructor() {}

  getCurrentPage() {
    return this.currentPage;
  }
  
  setCurrentPage(page) {
    this.currentPage = page;
  }

}
