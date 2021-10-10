import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      //this.product = this.productsService.getProduct(id);
    });
  }
  fetchProduct(id: string){
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }

  createProduct(){
    const newProduct:Product = {
      id:"6",
      image:"assets/images/pin.png",
      title:"Pin",
      price:80000,
      description:"bla bla bla bla bla"
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
    console.log(product);
    });
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
      price:40000,
      description:"edicion producto"
    };
    this.productsService.updateProduct('2', updateProduct)
    .subscribe(product => {
    console.log(product);
    });
  }

  daleteProduct(){
    this.productsService.daleteProduct('6')
    .subscribe(rta => {
    console.log(rta);
    });
  }
}
