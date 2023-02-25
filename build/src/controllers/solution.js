"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = void 0;
const validators_1 = require("../helpers/validators");
const bucket_1 = require("../classes/bucket");
const getMovements = (x, y, z, b1_name, b2_name) => {
    let bucket_x = new bucket_1.Bucket(x);
    let bucket_y = new bucket_1.Bucket(y);
    let temp_movements = [];
    while (bucket_x.current != z && bucket_y.current != z) {
        console.log("X:%d-Y:%d", bucket_x.current, bucket_y.current);
        if (bucket_x.isEmpty() && !bucket_y.isFull()) {
            bucket_x.fill();
            temp_movements.push({ x: bucket_x.current, y: bucket_y.current, op: `FILL ${b1_name}` });
        }
        if (bucket_y.isFull() && bucket_x.isEmpty()) {
            bucket_y.current = bucket_y.current - bucket_x.transfer(bucket_y.current);
            temp_movements.push({ x: bucket_x.current, y: bucket_y.current, op: `TRANSFER-${b2_name} TO ${b1_name}` });
        }
        else if (bucket_y.isFull()) {
            bucket_y.empty();
            temp_movements.push({ x: bucket_x.current, y: bucket_y.current, op: `EMPTY ${b2_name}` });
        }
        bucket_x.current = bucket_x.current - bucket_y.transfer(bucket_x.current);
        temp_movements.push({ x: bucket_x.current, y: bucket_y.current, op: `TRANSFER-${b1_name} TO ${b2_name}` });
    }
    temp_movements.push({ x: bucket_x.current, y: bucket_y.current, op: "SOLVE" });
    return temp_movements;
};
const solution = (req, res) => {
    //let { x, y, z } = JSON.parse(req.body);
    let x = parseInt(req.body.x);
    let y = parseInt(req.body.y);
    let z = parseInt(req.body.z);
    console.log("%d,%d,%d", x, y, z);
    let movements = [];
    let movements1 = [];
    let movements2 = [];
    const validateStatus = (0, validators_1.validate)(x, y, z);
    if (validateStatus != "valid") {
        movements.push(validateStatus);
        return res
            .status(200)
            .json({ status: 404, message: validateStatus, movements });
    }
    //Buckets from X to Y
    movements1 = getMovements(x, y, z, "X", "Y");
    //Buckets from Y to X
    movements2 = getMovements(y, x, z, "Y", "X");
    //Checks which is the shortest
    if (movements1.length <= movements2.length) {
        movements = movements1;
    }
    else {
        movements2.forEach((movement) => {
            let temp = movement.x;
            movement.x = movement.y;
            movement.y = temp;
        });
        movements = movements2;
    }
    //Sends good answer
    return res
        .status(200)
        .json({ status: 200, message: "Exito valido", movements });
};
exports.solution = solution;
