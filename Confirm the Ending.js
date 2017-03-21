function confirmEnding(str, target) {
  
  var ln =str.length -target.length ;
  var ext = str.substr(ln,str.length -ln);

  if(ext === target){
    return true;
     }else 
       return false;
  
}

confirmEnding("Bastian", "n");