function reverseString(str) {
    //str = "hello";
  var array = [];
  
  array = str.split("");
  array = array.reverse();
  str = array.join("");
  return str;
}

reverseString("hello");
