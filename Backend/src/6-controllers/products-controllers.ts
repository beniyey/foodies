import { ProductsModel } from './../4-models/products-model';
import express, { NextFunction, Request, Response } from "express";
import productsLogic from "../5-logic/products-logic";
import { verifyLoggedIn } from '../3-middleware/verify-logged-in';
import { verifyAdmin } from '../3-middleware/verify-admin';

const router = express.Router();

router.get("/products-categories", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const categories = await productsLogic.getAllCategories();
        response.json(categories);
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/products", verifyLoggedIn, async (request: Request, response: Response, next: NextFunction) => {
    try {
        const products = await productsLogic.getAllProducts();
        response.json(products);
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/products-by-category/:categoryId", verifyLoggedIn, async (request: Request, response: Response, next: NextFunction) => {
    try {
        const categoryId = request.params.categoryId;
        const products = await productsLogic.getProductsByCategory(categoryId);
        response.json(products);
    }
    catch (err: any) {
        next(err);
    }
});

router.post("/products", verifyAdmin, async (request: Request, response: Response, next: NextFunction) => {
    try {
        const image = request.files.image;
        request.body.image = image;
        const product = new ProductsModel(request.body);
        const newProduct = await productsLogic.addProduct(product);
        response.json(newProduct);
    }
    catch (err: any) {
        next(err);
    }
});

router.put("/products/:_id", verifyAdmin, async (request: Request, response: Response, next: NextFunction) => {
    try {
        if (request.files) {
            console.log("image")
            const image = request.files.image;
            request.body.image = image;
        }
        const product = new ProductsModel(request.body);
        product._id = request.params._id;
        const updatedProduct = await productsLogic.updateProduct(product);
        response.json(updatedProduct);
    }
    catch (err: any) {
        next(err);
    }
});

router.delete("/products/:_id", verifyAdmin, async (request: Request, response: Response, next: NextFunction) => {
    try {
        const _id = request.params._id;
        await productsLogic.deleteProduct(_id);
        response.sendStatus(204);
    }
    catch (err: any) {
        next(err);
    }
});



export default router;


