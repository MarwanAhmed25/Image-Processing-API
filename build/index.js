"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var image_routes_1 = __importDefault(require("./utilites/image_routes"));
var jimp_1 = __importDefault(require("jimp"));
//initial port and app
var port = 3000;
var app = (0, express_1.default)();
var d = [
    'Twins',
    'Hamel El Mesk',
    'A2z Car Service',
    'Dubai Car Care',
    'Al meery Car wash',
    'Al Awamery for accessories ',
    'Pink&Blue ',
    'Creative Kids academy ',
    'Salon Adel&Aeed',
    'Salon Adel&Aeed',
    'Salon Adam',
    'El-Masry Salon',
    'salon El Masry (Men)',
    'Beauty Center Ghada',
    'Monzefat Tsahel',
    'monzefat El-Zahry',
    'Hyber Dream',
    'DR. Brand',
    'Pyramids Vet Clinic',
    'Fharghaly Fruit ',
    'Twins Dry Clean',
    'Android store',
    'Hai Phone',
    'Moasst Zedan Store',
    'dubai phone',
    'Yakut Butik ',
    'Ghodrawat Elhag Sayed',
    'Gezart El-Waraqi',
    'Gezart Mosaad',
    'Khodrawat El-Faiomy',
    'saltanah Bin&mukasirat',
    'Al-Mardiniu Boun&Mexrat',
    'muasasat Al-Bardawily lileitarh',
    'Alban Al-Falaah',
    'khair zaman ',
    'Mazraet alban el reef',
    'Gezart Yom Said',
    'Zamzam',
    'Etaret TAIPA',
    'Etaret Taipa',
    'Teuor El-Gezera',
    'Teyor Wady El-Melouk',
    'Badr El-Attar',
    'khodrwat Al Ekhlas',
    'Teyor Ganaa El Saaid ',
    'khodrawat Ganet belqis',
    'Zaen Decor Company',
    'stars Studio',
    'Al Andalus ',
    'Dehant GLC Markz el farouk',
    'Maghbozat Islam',
    'Wonderland',
    'El-Tabeeb Pharmacy',
    'Dr Heba Sobhy Pharmacy',
    'Dr.waled pharmacy ',
    'Khan El Konafa',
    'Hadbet El-Sham',
    'Al-Embrator Matam',
    'Asmak Hut Alex',
    'Pizza Gedo',
    'Asmak Al Fares',
    'Pizza Royal',
    'Kebda El-Rahma',
    'City first',
    'Vians Food',
    'abo Alaa ',
    'Swilam Group',
    'Maktabty',
    'Needs Market',
    'Aswak Al-hamd',
    'Muqilat Al-homsany',
    'Al Raya Market ',
    'Boska Sweet',
    'Al Omaraa Group Oriental Weavers',
    'Al Omaraa Group Oriental Weavers',
    'zilzal',
    'Al Anwar Al Mohamadya',
    'Al Anwar Al Mohamadya',
    'Silver House',
    'Al Hadaba',
    'Al Arzak market',
    'Teuor El Omda',
    'Teuor El Omda',
    'Nada 4 Pets ( Pharmacy)',
    'awlad Ramadan market ',
    'Serag El Din pharmacy ',
    'Alkouly Pharmacies ',
    'Scope Vet Clinic',
    'Alban tayb',
    'Alban tayb',
    'Karkeeb',
    'Mazag Cafe',
    'Ahmed Hassan sport ',
    'Virginia Spa',
];
//configre the server to listen to port and running it
app.listen(port, function () {
    console.log("srever running on port ".concat(port));
    d.map(function (s) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, imageOverlay(s)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    console.log("Image is processed successfully");
});
//using middelware to get route of the image/api from another file
app.use('/image/api', image_routes_1.default);
function imageOverlay(inp) {
    return __awaiter(this, void 0, void 0, function () {
        var watermark, image;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    inp = inp.trim();
                    return [4 /*yield*/, jimp_1.default.read(path_1.default.join(process.cwd(), "logo.png"))];
                case 1:
                    watermark = _a.sent();
                    watermark = watermark.resize(90, 90); // Resizing watermark image
                    return [4 /*yield*/, jimp_1.default.read(path_1.default.join(process.cwd(), "images/".concat(inp, ".png")))];
                case 2:
                    image = _a.sent();
                    return [4 /*yield*/, watermark];
                case 3:
                    watermark = _a.sent();
                    image.composite(watermark, 105, 105, {
                        mode: jimp_1.default.BLEND_SOURCE_OVER,
                        opacityDest: 1,
                        opacitySource: .7
                    });
                    return [4 /*yield*/, image.writeAsync(path_1.default.join(process.cwd(), "new_images/".concat(inp, ".png")))];
                case 4:
                    _a.sent(); // out name
                    return [2 /*return*/];
            }
        });
    });
}
//export the app to use when importing the file
exports.default = app;
