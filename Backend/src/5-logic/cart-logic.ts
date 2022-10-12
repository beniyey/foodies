import { OrderModel } from './../4-models/order-model';
import { IUserModel } from './../4-models/user-model';
import { Request } from 'express';
import cyber from '../2-utils/cyber';
import { CartItemModel, ICartItemModel } from '../4-models/cart-item-model';
import { CartModel, ICartModel } from '../4-models/cart-model';

async function addToCart(item: ICartItemModel): Promise<ICartItemModel> {
    const dbItem = await CartItemModel.find({ productId: item.productId, cartId: item.cartId }).exec();

    if (dbItem[0]) {
        const quantity = dbItem[0].quantity + item.quantity;
        await CartItemModel.updateOne({ productId: item.productId, cartId: item.cartId }, { $set: { quantity } }).exec();
        const product = await CartItemModel.find({ productId: item.productId, cartId: item.cartId }).exec();
        return product[0];
    }

    return item.save();
}

async function removeItem(itemId: string): Promise<void> {
    await CartItemModel.findByIdAndDelete(itemId).exec();
}

async function returnCartItems(cartId: string): Promise<ICartItemModel[]> {

    return CartItemModel.find({ cartId }).populate("product").exec();

}

async function returnCart(request: Request): Promise<ICartModel> {
    const user: IUserModel = cyber.extractUser(request);

    // Check if cart already exists
    const dbCarts = await CartModel.find({ userId: user._id }).exec();
    const userOrders = await OrderModel.find({ userId: user._id }).exec();
    if (dbCarts.length > 0) {
        const available = dbCarts.find(cart => {
            return !userOrders.find(order => order.cartId.toString() === cart._id.toString());
        })
        if (available) {
            return available;
        }
    }

    // Create new cart if it doesn't exist
    const cart = new CartModel({ userId: user._id });
    cart.dateCreated = new Date();
    return cart.save();
}

export default {
    addToCart,
    removeItem,
    returnCart,
    returnCartItems
}