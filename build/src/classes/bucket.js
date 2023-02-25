"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bucket = void 0;
class Bucket {
    constructor(max) {
        this.current = 0;
        this.max = max;
    }
    transfer(amount) {
        //Normal case
        if (this.current + amount <= this.max) {
            this.current += amount;
            return amount;
        }
        //Overflow
        let dif = this.max - this.current;
        this.current = this.max;
        return dif;
    }
    fill() {
        this.current = this.max;
    }
    empty() {
        this.current = 0;
    }
    isFull() {
        if (this.current == this.max) {
            return true;
        }
        else {
            return false;
        }
    }
    isEmpty() {
        if (this.current == 0) {
            return true;
        }
        else {
            false;
        }
    }
}
exports.Bucket = Bucket;
