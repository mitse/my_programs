
function destroyer(arr) {
  var args = [].slice.call(arguments);
  args.splice(0,1);
 
   var narr = arr.filter(function(el){
     // if indexOf(arr_element) !== -1 do not return it
    return args.indexOf(el) === -1;
    });
  return narr;
}


// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]