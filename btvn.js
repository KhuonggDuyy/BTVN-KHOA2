//BAI 1
function reverseString(str) {
    var arr = str.split("");
    arr.reverse();
    var reversedStr = arr.join("");
    return reversedStr;
  }
  var str = "abcdef";
  var reversedStr = reverseString(str);
  console.log(reversedStr);
    


//BAI 2
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}
var arr = [1, 2, 3, 5, 4, 2, 6, 4];
var uniqueArr = removeDuplicates(arr);
console.log(uniqueArr);


//BAI 3
function mostFrequent(arr) {
    var frequency = {};
    var max = 0;
    var result;
  
    for (var i = 0; i < arr.length; i++) {
      var element = arr[i];
      if (frequency[element] == null) {
        frequency[element] = 1;
      } else {
        frequency[element]++;
      }
      if (frequency[element] > max) {
        max = frequency[element];
        result = element;
      }
    }
  
    return [result, max];
  }
  var arr = [1, 2, 3, 2, 4, 3, 5, 6, 2, 4];
  var [mostFrequentElement, frequency] = mostFrequent(arr);
  console.log("value: " + mostFrequentElement);
  console.log("count: " + frequency);
    