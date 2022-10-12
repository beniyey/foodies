import path, { dirname } from 'path';
import fs from 'fs';
import { CategoryModel, ICategoryModel } from "../4-models/category-model";
import { IProductsModel, ProductsModel } from "../4-models/products-model";
import { v4 as uuid } from 'uuid';
import fsp from 'fs/promises';
import socketLogic from './socket-logic';


async function getAllCategories(): Promise<ICategoryModel[]> {
    return await CategoryModel.find().exec();
}

async function getAllProducts(): Promise<IProductsModel[]> {
    return await ProductsModel.find().populate("category").exec();
}

async function getOneProduct(_id: string): Promise<IProductsModel[]> {
    return await ProductsModel.find({ _id: _id }).populate("category").exec();
}

async function getProductsByCategory(categoryId: string): Promise<IProductsModel[]> {
    return await ProductsModel.find({ categoryId }).populate("category").exec();
}

async function addProduct(product: IProductsModel): Promise<IProductsModel> {

    if (product.image) {
        let lastIndex = product.image.name.lastIndexOf(".");
        const format = product.image.name.substring(lastIndex);
        const imageName = uuid() + format;

        product.image.mv(path.join(__dirname, `../public/${imageName}`));

        product.imageName = imageName;

        product.image = undefined;
    }

    const addedProduct = await product.save();
    // emit socket add event
    socketLogic.reportAddedProduct(addedProduct);
    return addedProduct;
};

async function updateProduct(product: IProductsModel): Promise<IProductsModel> {

    const dbProduct = (await getOneProduct(product._id))[0];

    if (product.image) {
        if (fs.existsSync(path.join(__dirname, `../public/${dbProduct.imageName}`))) {
            console.log("deleting image from database")
            fsp.unlink(path.join(__dirname, `../public/${dbProduct.imageName}`));
        }

        let lastIndex = product.image.name.lastIndexOf(".");
        const format = product.image.name.substring(lastIndex);
        const imageName = uuid() + format;

        product.image.mv(path.join(__dirname, `../public/${imageName}`));

        product.imageName = imageName;

        product.image = undefined;
    }

    const updatedProduct: IProductsModel = await ProductsModel.findOneAndUpdate({ _id: product._id }, {
        name: product.name
        , price: product.price
        , imageName: product.imageName
        , categoryId: product.categoryId
    }, {
        new: true
    }).exec();

    // emit socket update event
    socketLogic.reportUpdatedProduct(updatedProduct);
    return updatedProduct;
}

export default {
    getAllCategories,
    getAllProducts,
    addProduct,
    updateProduct,
    getOneProduct,
    getProductsByCategory
}