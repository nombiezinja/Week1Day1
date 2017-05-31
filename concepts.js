/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in arr join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
// a custom function written by you (you must define it too!)
function joinList(arr) {
  var output = "";
  for (var i = 0; i < arr.length; i ++) {
    if (i != arr.length - 1) {
      output = output + arr[i] + ", "
    }
    else {
      output = output + arr[i]
    }
  }
  return output;
}

var concepts = joinList(conceptList);

// Write your code here...

console.log("Today I learned about " + concepts + ".");

var emptyArr = [];
console.log(joinList(emptyArr));