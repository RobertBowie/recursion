// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//--------------------------------------------------------
// stringifyJSON:
//  JSON.stringify() converts a value to JSON notation representing it:
//  Properties of non-array objects are not guaranteed to be stringified in any particular order.
//  Boolean, Number, and String objects are converted to the corresponding primitive values.
//  If undefined or a function is encountered during conversion it is omitted.
//--------------------------------------------------------
var stringifyJSON = function(obj) {
//--------------------------------------------------------
// Setup:
//--------------------------------------------------------
  var result = [];
  var initialRun = true;
//--------------------------------------------------------
// Manipulation:
//--------------------------------------------------------
  if (obj === null) {
    return "null";
  }
  if (typeof(obj) === "boolean") {
    return obj.toString();
  }
  if (typeof(obj) === "string") {
    return '"' + obj + '"';
  }
  if (typeof(obj) === "number" && initialRun === false) {
    return obj;
  } else if (typeof(obj) === "number" && initialRun === true) {
    return obj.toString();
  }
  if (obj === undefined || typeof(obj) === "function") {
    return null;
  }
  if (Array.isArray(obj)) {
    if (obj.length < 1) { return '[]' };
    return '[' + obj.map(function(value) {
      return stringifyJSON(value);
    }).join(',') + ']';
  }
  if (typeof(obj) === "object") {
    initialRun = false;
    Object.keys(obj).forEach(function(key) {
      var value = stringifyJSON(obj[key]);
      if (value !== null) {
        result.push('"' + key + '":' + value);
      }
    });
  }

  result = '{' + result.join(',') + '}';
//--------------------------------------------------------
// Output:  Example - JSON.stringify({testing: "1,2,3", sayWhat: "What!"})
//                    ============>"{"testing":"1,2,3","sayWhat":"What!"}"
//--------------------------------------------------------
  return result;
};
