import { SocketService } from './../../../services/socket.service';
import jwt_decode from 'jwt-decode';
import { increment } from './../../../../state/total-price/total-price-actions';
import { Store } from '@ngrx/store';
import { SpecialProductsModel } from './../../../models/special-products-model';
import { Router } from '@angular/router';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import CategoryModel from 'src/app/models/category-model';
import ProductsModel from 'src/app/models/products-model';
import UserModel from 'src/app/models/user-model';
import { addAllProducts } from 'src/state/products/products-actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  categories: CategoryModel[] = [];
  products: ProductsModel[] = [];
  totalPrice: number = 0;
  special: boolean = true;
  cart: string = "no-display";
  logoutDiv: string = "regular-logout";
  topBannerState: string = "top-banner-max";
  topBannerMax: boolean = true;
  category: string = "home";
  user: UserModel;
  itemsPerPage = 16;
  pages: number[] = [];
  currentPage = 1;

  specialProducts: SpecialProductsModel[] = [];
  specialProducts1: SpecialProductsModel[] = [];
  specialProducts2: SpecialProductsModel[] = [];


  constructor(
    private productsService: ProductsService,
    private router: Router,
    private store: Store,
    private socketService: SocketService,
  ) { }

  async ngOnInit(): Promise<void> {

    this.socketService.connect();

    try {
      let token: string;
      this.store.subscribe(state => {
        token = (state as any).token;
        this.totalPrice =
          Math.floor(+(state as any).totalPrice) > 0 ? Math.floor(+(state as any).totalPrice) : 0;
      });

      if (!token) {
        this.router.navigate(['/welcome-page']);
        return
      }

      this.user = (jwt_decode(token) as any).user;
      if (this.user.role?.name === "Admin") {
        this.router.navigate(['/admin-page']);
      }

      this.store.dispatch(increment({ payload: this.totalPrice }));

      this.specialProducts = await this.productsService.getAllSpecialProducts();
      this.specialProducts1 = this.specialProducts.slice(0, 4);
      this.specialProducts2 = this.specialProducts.slice(4, 8);
      this.categories = await this.productsService.getAllCategories();
    } catch (error) {
      console.log(error)
    }
  }

  async getByCategoryOrSearchParameter(parameter?: any, search?: string): Promise<void> {
    try {

      this.currentPage = 1;

      // get to home page
      if (parameter === 'home') {
        this.specialProducts = await this.productsService.getAllSpecialProducts();
        this.specialProducts1 = this.specialProducts.slice(0, 4);
        this.specialProducts2 = this.specialProducts.slice(4, 8);
        this.special = true;
        this.topBannerMax = true;
        this.topBannerState = "top-banner-max";
        this.logoutDiv = "regular-logout";
        this.category = "home";
        this.pages = [];
      }

      // get all products
      else if (parameter === 'all') {
        let result = await this.productsService.getAllProducts();
        this.store.dispatch(addAllProducts({ "payload": result }))
        this.bannerToggle();
        this.category = "all";
      }

      // get products by a search parameter
      else if (search) {
        let result = await this.productsService.getAllProducts();
        result = result.filter(p =>
          p.name.toLowerCase().includes(search.toLowerCase().trim()) ||
          p.category.name.toLowerCase().includes(search.toLowerCase()));
        this.store.dispatch(addAllProducts({ "payload": result }))

        this.bannerToggle()
        this.category = "";
      }

      // get products by category
      else if (parameter._id) {
        let result = await this.productsService.getAllProductsByCategory(parameter._id);
        this.store.dispatch(addAllProducts({ "payload": result }))

        this.bannerToggle();
        this.category = parameter.name;
      };

      this.store.subscribe(state => {
        this.products = (state as any).products;

        // pagination settings set initial page to 1`
        this.pages = new Array(Math.ceil(this.products.length / this.itemsPerPage)).fill(0).map((el, i) => el = i + 1);
        this.products = this.returnPaginatedArray(this.currentPage);
      });


    } catch (error) {
      console.log(error)
    }
  };

  bannerToggle() {
    try {
      this.special = false;
      this.topBannerMax = false;
      this.topBannerState = "top-banner-min";
      this.logoutDiv = "small-logout";
    } catch (error) {
      console.log(error)
    }
  }

  cartToggle() {
    try {
      this.cart = this.cart === "animate__fadeInLeft" ? "animate__fadeOutLeft" :
        "animate__fadeInLeft";
    } catch (error) {
      console.log(error)
    }
  }

  topBannerToggle() {
    try {
      this.topBannerState = this.topBannerState === "top-banner-min" ? "top-banner-max" :
        "top-banner-min";
    } catch (error) {
      console.log(error)
    }
  }

  returnPaginatedArray(pageNumber: number = 1) {
    try {
      let stateProducts: ProductsModel[];
      this.store.subscribe(state => {
        stateProducts = (state as any).products;
      });

      this.currentPage = pageNumber;
      const end = pageNumber * this.itemsPerPage;
      const start = end - this.itemsPerPage;
      return this.products = stateProducts.slice(start, end);
    } catch (error) {
      console.log(error)
      return this.products
    }
  }

}










