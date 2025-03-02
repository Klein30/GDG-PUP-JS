let globalVar = 'big ';
let anotherGlobalVar = 'small '; 
function demoFunctionScope () {
   let localVar = 'hotdog';
   console.log(globalVar); 
   console.log(localVar);
   return globalVar + localVar;
}
if (true) {
   let blockVar = 'My ';
   console.log(blockVar);
}
console.log(demoFunctionScope());