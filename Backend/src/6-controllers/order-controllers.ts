import express, { NextFunction, Request, Response } from "express";
import { verifyLoggedIn } from "../3-middleware/verify-logged-in";
import { OrderModel } from "../4-models/order-model";
import orderLogic from "../5-logic/order-logic";

const router = express.Router();

router.get("/order/:orderId",verifyLoggedIn ,async (request: Request, response: Response, next: NextFunction) => {
    try {
        const orderId = request.params.orderId;
        const addedOrder = await orderLogic.getOrder(orderId);
        response.json(addedOrder);
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/user-orders/:userId",verifyLoggedIn ,async (request: Request, response: Response, next: NextFunction) => {
    try {
        const userId = request.params.userId;
        const userOrders = await orderLogic.getAllUserOrders(userId);
        response.json(userOrders);
    }
    catch (err: any) {
        next(err);
    }
});

router.post("/order",verifyLoggedIn ,async (request: Request, response: Response, next: NextFunction) => {
    try {
        const order = new OrderModel(request.body);
        const dbOrder = await orderLogic.addOrder(order);
        response.json(dbOrder);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;


