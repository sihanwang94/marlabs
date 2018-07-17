import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http : HttpClient) { }

  getProducts() {
      this._http.get('http://localhost:4000/getproducts');//asynchronous function cause http is asynchronous
  }
}
