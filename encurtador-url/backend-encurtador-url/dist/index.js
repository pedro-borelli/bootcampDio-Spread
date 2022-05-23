"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const URLcontroller_1 = require("./controller/URLcontroller");
const express_1 = __importDefault(require("express"));
const MongoConnection_1 = require("./database/MongoConnection");
const api = (0, express_1.default)();
api.use(express_1.default.json());
api.use(express_1.default.urlencoded({ extended: true }));
api.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const database = new MongoConnection_1.MongoConnection();
database.connect();
const urlController = new URLcontroller_1.URLcontroller();
api.post("/shorten", urlController.shorten);
api.get("/:hash", urlController.redirect);
api.listen(process.env.PORT, () => console.log('Express listening'));
//# sourceMappingURL=index.js.map