var a=5  //6  //7  //8
        //7   //8
console.log(a)
var b=++a //6 //5 //6
console.log(a)
var c=++a - --b - ++a + ++b
//     7  -  5  - 8    + 6
//    6   -  5  - 7   +  6
console.log(a)
console.log(b)
console.log(c)