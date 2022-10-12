import { IOrderModel, OrderModel } from "../4-models/order-model";

async function addOrder(order: IOrderModel): Promise<IOrderModel> {
    return order.save();
}

async function getOrder(orderId: string): Promise<IOrderModel> {
    return OrderModel.findById(orderId);
}

async function getAllUserOrders(userId: string): Promise<IOrderModel[]> {
    return OrderModel.find({ userId }).exec();
};

export default {
    addOrder,
    getOrder,
    getAllUserOrders,
}