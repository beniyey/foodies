import { environment } from './../../../../environments/environment';
import ProductsModel from 'src/app/models/products-model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-products-card',
  templateUrl: './admin-products-card.component.html',
  styleUrls: ['./admin-products-card.component.scss']
})
export class AdminProductsCardComponent implements OnInit {

  @Input()
  product: ProductsModel;

  @Output()
  productToUpdate = new EventEmitter<ProductsModel>();

  class: string = "";


  imageSrc: string;

  constructor(
  ) { }

  ngOnInit(): void {
    this.imageSrc = environment.imagesUrl + this.product.imageName;
    this.class = "animate__animated animate__fadeIn";
  }

  edit() {
    this.productToUpdate.emit(this.product);
  }
}
