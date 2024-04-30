"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodedResistorValue = void 0;
const Colors = [
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
const prefixes = [
    [1000000000, "giga"],
    [1000000, "mega"],
    [1000, "kilo"],
];
function decodedResistorValue([band1, band2, band3]) {
    var _a;
    const [tens, ones, zeros] = [band1, band2, band3].map((b) => Colors.indexOf(b));
    let num = (tens * 10 + ones) * Math.pow(10, zeros);
    const [div, prefix] = (_a = prefixes.find(([d]) => num >= d)) !== null && _a !== void 0 ? _a : [1, ""];
    return `${num / div} ${prefix}ohms`;
}
exports.decodedResistorValue = decodedResistorValue;
