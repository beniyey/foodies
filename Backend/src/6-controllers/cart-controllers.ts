import express, { NextFunction, Request, Response } from "express";
import cartLogic from '../5-logic/cart-logic';
import { CartItemModel } from '../4-models/cart-item-model';

const router = express.Router();


// return cart items
router.get("/cart-item/:cartId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const cartId = request.params.cartId;
        const cartItems = await cartLogic.returnCartItems(cartId);
        response.json(cartItems);
    }
    catch (err: any) {
        next(err);
    }
});


// add item to cart
router.post("/cart-item", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const cartItem = new CartItemModel(request.body);
        const addedItem = await cartLogic.addToCart(cartItem);
        response.json(addedItem);
    }
    catch (err: any) {
        next(err);
    }
});

// initiate cart and return it to the front
router.post("/cart", async (request: Request, response: Response, next: NextFunction) => {
    try {
        console.log(request)
        const cart = await cartLogic.returnCart(request);
        response.json(cart);
    }
    catch (err: any) {
        next(err);
    }
});

// remove item from cart
router.delete("/cart-item/:itemId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const itemId = request.params.itemId;
        await cartLogic.removeItem(itemId);
        response.sendStatus(204);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;


