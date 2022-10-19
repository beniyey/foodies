import { environment } from './../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import CategoryModel from '../models/category-model';
import ProductsModel from '../models/products-model';
import { SpecialProductsModel } from '../models/special-products-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  async getAllCategories(): Promise<CategoryModel[]> {
    const categories = await firstValueFrom(this.http.get<CategoryModel[]>(environment.categoriesUrl))
    return categories;
  }

  async getAllProducts(): Promise<ProductsModel[]> {
    const products = await firstValueFrom(this.http.get<ProductsModel[]>(environment.productsUrl))
    return products;
  }

  async getAllProductsByCategory(category: string): Promise<ProductsModel[]> {
    const products = await firstValueFrom(this.http.get<ProductsModel[]>(environment.productsByCategoryUrl + category))
    return products;
  }

  async addProduct(product: ProductsModel) {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price.toString());
    formData.append('image', product.image.item(0));
    formData.append('categoryId', product.categoryId);

    const added = await firstValueFrom(this.http.post<ProductsModel>(environment.productsUrl, formData));
    return added;
  }

  async editProduct(product: ProductsModel) {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price.toString());
    if (product.image.length > 0) {
      formData.append('image', product.image.item(0));
    }
    formData.append('categoryId', product.categoryId);

    const edited = await firstValueFrom(this.http.put<ProductsModel>(environment.productsUrl + product._id, formData));
    return edited;
  }

  async getAllSpecialProducts(): Promise<SpecialProductsModel[]> {
    const specialProducts = await firstValueFrom(this.http.get<SpecialProductsModel[]>(environment.specialProductsUrl))
    return specialProducts;
  }

}
