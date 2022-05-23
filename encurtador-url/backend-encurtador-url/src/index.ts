import { URLcontroller } from './controller/URLcontroller';
import express from 'express';
import { MongoConnection } from './database/MongoConnection';


const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const database = new MongoConnection();
database.connect();

const urlController = new URLcontroller();
api.post("/shorten", urlController.shorten)
api.get("/:hash", urlController.redirect);

api.listen(process.env.PORT, () => console.log('Express listening'));