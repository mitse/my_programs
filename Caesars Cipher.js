function rot13(str) { 
  
  var nar = [];
  
  for (i=0; i<str.length; i++){
    var a = str.charCodeAt(i);
    if ( a>=65 && a<=(90-13) ){
      nar[i] = String.fromCharCode(a+13 );
      }
    else if( a>(90-13) && a<=90 ){
      nar[i] = String.fromCharCode(a-13);
    }
    else {
    nar[i] = String.fromCharCode(a);
     }
  }
  str = nar.join("");
  return str;
}

//  rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP" 