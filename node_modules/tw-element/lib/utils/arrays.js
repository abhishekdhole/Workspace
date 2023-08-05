'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const unique = (arr) => [...new Set(arr)];
const castArray = (arr) => {
  if (!arr && arr !== 0)
    return [];
  return Array.isArray(arr) ? arr : [arr];
};

exports.castArray = castArray;
exports.unique = unique;
//# sourceMappingURL=arrays.js.map
