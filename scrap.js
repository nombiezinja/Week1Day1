var arr = process.argv.slice(2);


function pigLatin(arr) {
  var result = [];
  for (i = 0; i < arr.length; i++) {
    result = result + arr[i] + " ";
  }
  return result
}

console.log(pigLatin(arr));