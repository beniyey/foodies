import ProductsModel from "./products-model";

class CartItemModel {
    _id: string;
    productId: string;
    cartId: string;
    quantity: number;
    totalPrice: number;
    product: ProductsModel;
}

export default CartItemModel;