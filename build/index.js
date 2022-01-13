"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var image_routes_1 = __importDefault(require("./utilites/image_routes"));
var port = 3000;
var app = (0, express_1.default)();
app.listen(port, function () {
    console.log("srever running on port ".concat(port));
});
app.get('/', function (req, res) {
    console.log('hello to get route //');
    res.send('test');
});
app.use('/image/api', image_routes_1.default.route);
exports.default = {
    app: app
};
