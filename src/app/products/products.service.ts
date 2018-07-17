import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http : HttpClient) { }

  getProducts() {
    //   this._http.get('http://localhost:4200/getproducts').subscribe((data) =>{
    //     console.log(data);
    //   });//asynchronous function because http is asynchronous
    return this._http.get('http://localhost:4200/getproducts');
  }
}
