import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor(private httpClient : HttpClient) { }

  getProduct():Observable<Product[]>{
    return this.httpClient.get<Product[]>(apiUrl);
  }
}
