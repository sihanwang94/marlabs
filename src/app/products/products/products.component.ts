import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  pageTitle : string = 'Product - list';
  showHideImg : boolean = true;
  products : any = [];
  constructor(private _productsService : ProductsService) { }

  ngOnInit() {
      this.products = this._productsService.getProducts();
  }

  toggleImage() : void {
    this.showHideImg = !this.showHideImg;
  }

}
