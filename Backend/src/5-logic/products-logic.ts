import path, { dirname } from 'path';
import fs from 'fs';
import { CategoryModel, ICategoryModel } from "../4-models/category-model";
import { IProductsModel, ProductsModel } from "../4-models/products-model";
import { v4 as uuid } from 'uuid';
import fsp from 'fs/promises';


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

    console.log(product)
    if (product.image) {
        let lastIndex = product.image.name.lastIndexOf(".");
        const format = product.image.name.substring(lastIndex);
        const imageName = uuid() + format;

        product.image.mv(path.join(__dirname, `../public/${imageName}`));

        product.imageName = imageName;

        product.image = undefined;
    }

    return await product.save();
};

async function updateProduct(product: IProductsModel): Promise<IProductsModel> {

    const dbProduct = (await getOneProduct(product._id))[0];

    if (product.image) {
        if (fs.existsSync(path.join(__dirname, `../public/${dbProduct.imageName}`))) {
            console.log("deleting")
            fsp.unlink(path.join(__dirname, `../public/${dbProduct.imageName}`));
        }

        let lastIndex = product.image.name.lastIndexOf(".");
        const format = product.image.name.substring(lastIndex);
        const imageName = uuid() + format;

        product.image.mv(path.join(__dirname, `../public/${imageName}`));

        product.imageName = imageName;

        product.image = undefined;
    }

    const product3 = await ProductsModel.findOneAndUpdate({ _id: product._id }, {
        name: product.name
        , price: product.price
        , imageName: product.imageName
        , categoryId: product.categoryId
    }, {
        returnOriginal: true
    }).exec();
    console.log(product3, "product3")
    return product;
}

async function deleteProduct(_id: string): Promise<void> {
    const dbProduct = (await getOneProduct(_id))[0];

    if (dbProduct.imageName) {
        if (fs.existsSync(path.join(__dirname, `../public/${dbProduct.imageName}`))) {
            console.log("deleting")
            fsp.unlink(path.join(__dirname, `../public/${dbProduct.imageName}`));
        }
    }

    await ProductsModel.findByIdAndDelete(_id).exec();
}

export default {
    getAllCategories,
    getAllProducts,
    addProduct,
    updateProduct,
    getOneProduct,
    deleteProduct,
    getProductsByCategory
}