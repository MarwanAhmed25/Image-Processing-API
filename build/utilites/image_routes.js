"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//import sharpFunction from './sharp_function';
var route = express_1.default.Router();
route.get('/', function (req, res) {
    res.send('image test');
    // if(req.query){
    //     res.send(sharpFunction.resizeImage(input,output,req.query.width,req.query.hieght));
    // }
});
exports.default = {
    route: route
};
