import { ISpecialProductsModel, specialProductsModel } from './../4-models/special-products-model';



async function addSpecialProduct(special: ISpecialProductsModel): Promise<ISpecialProductsModel> {
    return special.save();
}

async function deleteSpecialProduct(_id: string): Promise<void> {
    specialProductsModel.findByIdAndRemove(_id).exec();
}

async function getSpecialProducts(): Promise<ISpecialProductsModel[]> {
    return specialProductsModel.find().populate("product").exec();
}

export default {
    addSpecialProduct,
    getSpecialProducts,
    deleteSpecialProduct
};
