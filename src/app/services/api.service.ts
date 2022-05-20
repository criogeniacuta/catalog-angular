import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  /**
   * 
   * @param endpoint 
   * @param params 
   */
  get(endpoint: string, params?: any) {
    return this.http.get<Product[]>('http://localhost:3000' + endpoint);
  }

}
