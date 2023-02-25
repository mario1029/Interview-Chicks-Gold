"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const gcd_1 = __importDefault(require("./gcd"));
const validate = (x, y, z) => {
    //When X=Z or Y=Z then just fill one bucket
    if (x === z) {
        return `Reduntant-OP=FILL X(${x})`;
    }
    if (y === z) {
        return `Reduntant-OP=FILL Y(${y})`;
    }
    //Negative buckets...
    if (x <= 0 || y <= 0 || z <= 0) {
        return "Invalid-Negative buckets";
    }
    //Not enought space in any bucket
    if ((z > y) && (z > x)) {
        return "Invalid-Impossible to reach Z";
    }
    if (z % (0, gcd_1.default)(x, y) != 0) {
        return "Invalid-Impossible (Greast Commin Divisor)";
    }
    return "valid";
};
exports.validate = validate;
