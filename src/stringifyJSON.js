// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//--------------------------------------------------------
// Building an iterator helper to keep it clean:
//--------------------------------------------------------
function obEach(obj, cb) {
  for (var key in obj) {
    cb(obj[key], key, obj);
  }
}
//--------------------------------------------------------
//
//--------------------------------------------------------
var stringifyJSON = function(obj) {
//--------------------------------------------------------
// Setup:
//--------------------------------------------------------
  var result = '';
//--------------------------------------------------------
// Manipulation:
//--------------------------------------------------------
  obEach(obj, function(value, key) {
    
  });
//--------------------------------------------------------
// Output:
//--------------------------------------------------------
  return result;
};
