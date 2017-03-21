function palindrome(str) {
  
  // replace non-word characters with blank space
  var re = /[^\w]|_/gi;
  var newstr = str.replace(re,"");
  
  // turn everything lower case 
  newstr = newstr.toLowerCase();
  
  // check if reversed_string is equal to string
  if(reverseString(newstr) === newstr)
  return true;
  else return false;
}



function reverseString(str) {
    //str = "hello";
  var array = [];
  
  array = str.split("");
  array = array.reverse();
  str = array.join("");
  return str;
}


palindrome("eye");