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
  var node = arguments[1] || document.body;
  var classCheck = function(targetNode) { return (targetNode.classList && targetNode.classList.contains(className)) }
//-----------------------------------------------------------
// Initial check for target class.
//-----------------------------------------------------------
  if (classCheck(node)) {
    result.push(node);
  }
//-----------------------------------------------------------
// Check for children and pass them into func if they exist.
//-----------------------------------------------------------
  var children = node.children ? node.children : null;
  if (children) {
    childrenCopy = [].slice.call(children);
    childrenCopy.forEach(function(child) {
      node = child;
      result = result.concat(getElementsByClassName(className, node));
     });
  }
  return result;
};
