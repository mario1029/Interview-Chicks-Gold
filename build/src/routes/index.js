"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const solution_1 = require("../controllers/solution");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/solution", solution_1.solution);
router.get('/home', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../../public/index.html'));
});
