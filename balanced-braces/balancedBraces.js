
function balancedBraces(...args) {
  const isOpenBrace  = (ele) =>  (ele === '[' || ele == '{' || ele == '(');
  const isCloseBrace = (ele) => (ele == ']' ||  ele == '}' || ele == ')');
  const isBalanced = (brace1, brace2) => ((brace1 == '[' && brace2 == ']') 
                                      || (brace1 == '{' && brace2 == '}') 
                                      || (brace1 == '(' && brace2 == ')'));

  let stack = new Array();
  const arr = args[0];
  for(let element of arr) {
    if(isOpenBrace(element)) {
      stack.push(element);
    }
    else if(isCloseBrace(element)) {
      if(stack.length == 0) return false;
      const open = stack.pop();
      if(!isBalanced(open,element)) return false;
    }
  }
  return (stack.length == 0);
}

export {
  balancedBraces,
};

/*
console.log(balancedBraces("{}"));
console.log(balancedBraces("{()[{}[]]}"));
console.log(balancedBraces("{(})"));
console.log(balancedBraces("{{()[}[]]}"));
console.log(balancedBraces("if(a==b) x = y;"));
console.log(balancedBraces("if(a==b x = y;"));
console.log(balancedBraces("if(x<10}(b++;}else{b+=10;}"));
*/