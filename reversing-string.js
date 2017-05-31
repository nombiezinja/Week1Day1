
var str = process.argv.slice(2);

function reverse(str) {
  var result = [];
  var placeholder = "";
  for (i = 0; i < str.length; i++) {
    placeholder = str[i];
    function reverseString(placeholder) {
      var reStr = "";
      for (var n = placeholder.length - 1; n >= 0; n--) {
        reStr += placeholder[n];
      }
      return reStr;
    }
    result = result + reverseString(placeholder) + "\n";
  }
  return result;
}

console.log(reverse(str));
