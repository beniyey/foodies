import { SocketService } from './../../../services/socket.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import CartItemModel from 'src/app/models/cart-item-model';
import CategoryModel from 'src/app/models/category-model';
import ProductsModel from 'src/app/models/products-model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin-products-list',
  templateUrl: './admin-products-list.component.html',
  styleUrls: ['./admin-products-list.component.scss']
})
export class AdminProductsListComponent implements OnInit {

  @ViewChild("imageFile")
  public imageFileRef: ElementRef<HTMLInputElement>;

  categories: CategoryModel[] = [];
  products: ProductsModel[] = [];
  totalPrice: number = 0;
  special: boolean = true;
  popupState: string = "no-display";
  logoutDiv: string = "regular-logout";
  topBannerState: string = "top-banner-max";
  topBannerMax: boolean = true;
  category: string = "all";
  manipulatedProduct = new ProductsModel();
  productManipulationState: string = "add";
  itemsPerPage = 16;
  pages: number[] = [];
  currentPage = 1;


  cartItems: CartItemModel[] = [];


  constructor(
    private productsService: ProductsService,
    private socketService: SocketService
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      this.categories = await this.productsService.getAllCategories();
      this.products = await this.productsService.getAllProducts();
      localStorage.setItem("products", JSON.stringify(this.products));

      // initiate an array of numbers to be used as pages
      this.pages = new Array(Math.ceil(this.products.length / this.itemsPerPage)).fill(0).map((el, i) => el = i + 1);
      this.products = await this.returnPaginatedArray(this.currentPage);
      this.manipulatedProduct.categoryId = "";

      // initiate socket connection
      this.socketService.connect();
      
    } catch (error) {
      console.log(error);
    }
  }

  async getByCategoryOrSearchParameter(parameter?: any): Promise<void> {
    this.currentPage = 1;
    if (parameter === 'all') {
      this.products = await this.productsService.getAllProducts();
      localStorage.setItem("products", JSON.stringify(this.products));
      this.pages = new Array(Math.ceil(this.products.length / this.itemsPerPage)).fill(0).map((el, i) => el = i + 1);
      this.smallBanner()
      this.category = "all";
    } else if (parameter.search) {
      this.products = await this.productsService.getAllProducts();
      this.products = this.products.filter(p =>
        p.name.toLowerCase().includes(parameter.search.toLowerCase().trim()) ||
        p.category.name.toLowerCase().includes(parameter.search.toLowerCase()));
      localStorage.setItem("products", JSON.stringify(this.products));
      this.pages = new Array(Math.ceil(this.products.length / this.itemsPerPage)).fill(0).map((el, i) => el = i + 1);
      this.smallBanner()
      this.category = "";
    }
    else {
      this.products = await this.productsService.getAllProductsByCategory(parameter._id);
      localStorage.setItem("products", JSON.stringify(this.products));
      this.pages = new Array(Math.ceil(this.products.length / this.itemsPerPage)).fill(0).map((el, i) => el = i + 1);
      this.smallBanner()
      this.category = parameter.name;
    };
    this.products = await this.returnPaginatedArray(this.currentPage);
  };

  smallBanner() {
    this.special = false;
    this.topBannerMax = false;
    this.topBannerState = "top-banner-min";
    this.logoutDiv = "small-logout";
  }

  topBannerToggle() {
    this.topBannerState = this.topBannerState === "top-banner-min" ? "top-banner-max" : "top-banner-min";
  }

  editProduct(product: ProductsModel) {
    this.productManipulationState = "edit";
    this.manipulatedProduct = product;
    this.cartOpen();
  }

  send() {
    if (this.imageFileRef.nativeElement.files) {
      this.manipulatedProduct.image = this.imageFileRef.nativeElement.files;
    }
    switch (this.productManipulationState) {
      case "add":
        this.productsService.addProduct(this.manipulatedProduct);
        break;
      case "edit":
        this.productsService.editProduct(this.manipulatedProduct);
        break;
    }
    this.cartClose();
  }

  cartClose() {
    this.popupState = "animate__fadeOutLeft";
    this.manipulatedProduct = new ProductsModel();
    this.imageFileRef.nativeElement.value = "";
    this.productManipulationState = "add";
  }

  cartOpen() {
    this.popupState = "animate__fadeInLeft";
  }


  // pagination for the products
  async returnPaginatedArray(pageNumber = 1) {
    let products = JSON.parse(localStorage.getItem("products"));
    this.currentPage = pageNumber;
    const end = pageNumber * this.itemsPerPage;
    const start = end - this.itemsPerPage;
    return this.products = products.slice(start, end);
  }

}
