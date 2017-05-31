var arr = process.argv.slice(2);

function pigLatin(arr) {
  var result = [];
  var placeholder = "";
  for (i = 0; i < arr.length; i++) {
    placeholder = arr[i];
    function strManip(placeholder) {
      var manipulated = placeholder.slice(1) + placeholder[0] + "ay";
      return manipulated;
    }
    result = result + strManip(placeholder) + " ";
  }
  return result;
}

console.log(pigLatin(arr));