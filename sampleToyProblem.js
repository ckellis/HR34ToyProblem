/*
Description:

Write a function that takes an array/list of numbers and returns a number such that

Explanation total([1,2,3,4,5]) => 48

1+2=3--\ 3+5 =>     8 \
2+3=5--/ \            ==  8+12=>20\
          ==>5+7=> 12 / \           20+28 => 48
3+4=7--\ /            == 12+16=>28/
4+5=9--/ 7+9 =>     16  /

if total([1,2,3]) => 8 then

first+second => 3 \
                   then 3+5 => 8
second+third => 5 /

*/
var arr = [1,2,3,4,5];

var total = function (array) {
  var sum = [];
  if(array.length===1){
    return array[0];
  }
  for(var i = 0; i< array.length - 1; i++){
    sum[i]=(array[i]+array[i+1]);
  }
  return total(sum);
};

console.log(total(arr));

/*---------------
var charCount = function(character, string) {
  var count = 0, length = string.length;
  if(length === 0){
    return count;
  }
  if(string[0] === character){
    count ++;
  }
  string = string.slice(1);
  return count + charCount(character, string);
};

console.log(charCount("o", "noooooo"));
*/

