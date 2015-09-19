// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//--------------------------------------------------------
// Building (hopefully) useful helpers:
//--------------------------------------------------------
function obEach(obj, cb) {
  for (var key in obj) {
    cb(obj[key], key, obj);
  }
};
//--------------------------------------------------------
// stringifyJSON:
//  JSON.stringify() converts a value to JSON notation representing it:
//  Properties of non-array objects are not guaranteed to be stringified in any particular order.
//  Boolean, Number, and String objects are converted to the corresponding primitive values.
//  If undefined, a function, or a symbol is encountered during conversion it is omitted.
//  All symbol-keyed or non-enumerable properties will be completely ignored.
//--------------------------------------------------------
var stringifyJSON = function(obj) {
//--------------------------------------------------------
// Setup:
//--------------------------------------------------------
  var result = [];

  if (typeof(obj) === "string") {
    return '"' + obj + '"';
  }
  if (typeof(obj) === "number") {
    return obj;
  }
  if (obj === undefined || typeof(obj) === "function") {
    return null;
  }
    if (Array.isArray(obj)) {
    //Handle an array here;
  }
  if (typeof(obj) === "object") {
    return null;
  }

//--------------------------------------------------------
// Manipulation:
//--------------------------------------------------------
  Object.keys(obj).forEach(function(key) {
    result.push('"' + key + '": ' + stringifyJson(obj[key]));
  });

  result = '{' + result.join(',') + '}';
//--------------------------------------------------------
// Output:  Example - JSON.stringify({testing: "1,2,3", sayWhat: "What!"})
//                    ============>"{"testing":"1,2,3","sayWhat":"What!"}"
//--------------------------------------------------------
  return result;
};
