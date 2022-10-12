import express, { NextFunction, Request, Response } from "express";
import specialProductsLogic from "../5-logic/special-products-logic";
import { verifyLoggedIn } from '../3-middleware/verify-logged-in';
import { verifyAdmin } from '../3-middleware/verify-admin';
import { specialProductsModel } from "../4-models/special-products-model";

const router = express.Router();


router.get("/special-products", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const products = await specialProductsLogic.getSpecialProducts();
        response.json(products);
    }
    catch (err: any) {
        next(err);
    }
});

router.post("/special-products", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const product = new specialProductsModel(request.body);
        const newProduct = await specialProductsLogic.addSpecialProduct(product);
        response.json(newProduct);
    }
    catch (err: any) {
        next(err);
    }
});

router.delete("/special-products/:_id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const _id = request.params._id;
        await specialProductsLogic.deleteSpecialProduct(_id);
        response.sendStatus(204);
    }
    catch (err: any) {
        next(err);
    }
});



export default router;


