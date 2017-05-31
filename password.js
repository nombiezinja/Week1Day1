var string = process.argv[2];

function obfuscate(str) {
  var intermediate = str.replace(/a/g, "4");
  intermediate = intermediate.replace(/e/g, "3");
  intermediate = intermediate.replace(/o/g, "0");
  intermediate = intermediate.replace(/l/g, "1");
  return intermediate
}

console.log(obfuscate(str));