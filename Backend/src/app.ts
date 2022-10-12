import express from "express";
import cors from "cors";
import config from "./2-utils/config";
import catchAll from "./3-middleware/catch-all";
import expressFileUpload from "express-fileupload";
import dal from "./2-utils/dal";
import authControllers from "./6-controllers/auth-controllers";
import productsControllers from "./6-controllers/products-controllers";
import cartControllers from "./6-controllers/cart-controllers";
import orderControllers from "./6-controllers/order-controllers";
import specialProductsControllers from "./6-controllers/special-products-controllers";
import socketLogic from "./5-logic/socket-logic";
import path from "path";


const server = express();

server.use(cors());
server.use(express.json());

server.use(express.static("src/public"));

server.use(expressFileUpload());

server.use("/api", productsControllers);
server.use("/api", authControllers);
server.use("/api", cartControllers);
server.use("/api", orderControllers);
server.use("/api", specialProductsControllers);

server.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
});

server.use(catchAll);

const httpServerInstance = server.listen(config.port, () => {
    dal.connect();
    console.log(`Listening on http://localhost:${config.port}`);
});

socketLogic.init(httpServerInstance);