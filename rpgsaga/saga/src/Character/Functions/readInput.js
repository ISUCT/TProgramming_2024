"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readInput = readInput;
var readline = require("readline");
function readInput(query) {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(function (resolve) {
        rl.question(query, function (answer) {
            resolve(answer);
            rl.close();
        });
    });
}
