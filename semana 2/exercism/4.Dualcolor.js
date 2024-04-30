"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodedValue = void 0;
const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
];
const colorCode = (color) => COLORS.indexOf(color);
const decodedValue = ([tens, ones]) => colorCode(tens) * 10 + colorCode(ones);
exports.decodedValue = decodedValue;
