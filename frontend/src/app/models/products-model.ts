import CategoryModel from "./category-model";

class ProductsModel {
    _id: string;
    name: string;
    price: number;
    categoryId: string;
    category: CategoryModel;
    image: FileList;
    imageName: string;
}

export default ProductsModel;