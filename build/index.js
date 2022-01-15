"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var image_routes_1 = __importDefault(require("./utilites/image_routes"));
//initial port and app
var port = 3000;
var app = (0, express_1.default)();
//configre the server to listen to port and running it
app.listen(port, function () {
    console.log("srever running on port ".concat(port));
});
//using middelware to get route of the image/api from another file
app.use('/image/api', image_routes_1.default);
//export the app to use when importing the file
exports.default = app;
