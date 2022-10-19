import { Component, OnInit } from '@angular/core';
import CategoryModel from 'src/app/models/category-model';
import ProductsModel from 'src/app/models/products-model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product = new ProductsModel();
  categories: CategoryModel[] = [];

  constructor(private productsService: ProductsService) { }

  async ngOnInit(): Promise<void> {
    this.categories = await this.productsService.getAllCategories();

  }

  async send() {
    const image = document.getElementById("image") as HTMLInputElement;;
    this.product.image = image.files;
    await this.productsService.addProduct(this.product);
  }

}
