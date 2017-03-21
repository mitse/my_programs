function mutation(arr) {
  var str1 =arr[0].toLowerCase();
  var str2 =arr[1].toLowerCase();

for(i=0; i<str2.length; i++){
  var n = str2.charAt(i);
  var a =str1.indexOf(n);
  if(a ==-1 ) 
    return false;
    }
  return true;
 }


// mutation(["hello", "hey"]) should return false.