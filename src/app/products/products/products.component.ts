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
      this._productsService.getProducts().subscribe((data) => {
        this.products = data;
      });
  }

  toggleImage() : void {
    this.showHideImg = !this.showHideImg;
  }

  ratingFromChild(rating:string) {
    //alert(rating);
    this.pageTitle = rating;
  }

}
