// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
//-----------------------------------------------------------
// Setting up shop.
//-----------------------------------------------------------
  var result = [];
  var node = node || document.body;
//-----------------------------------------------------------
// Initial check for target class.
//-----------------------------------------------------------
  if (node.classList && node.classList.contains(className)) {
    result.push(node);
  }
//-----------------------------------------------------------
// Check for children and move to Phase II
//-----------------------------------------------------------
  var children = node.children ? node.children : null;
  if (children) {
    //
  }
//-----------------------------------------------------------
// 
//-----------------------------------------------------------


//-----------------------------------------------------------
// 
//-----------------------------------------------------------
  return result;
};
