var first=require("./myfirst");
var fs=require("fs");
var second=require("./mysecond")
console.log(first.a(5))
console.log(second.b(5))
let aff=first.a(14);
let ass=second.b(14);

 fs.appendFile('mynewfile.txt', "The value of 14 when passed through the myMultiplier function "+aff + "\n" , function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  
  fs.appendFile('mynewfile.txt',"The value of 14 when passed through the myMultiplier function "+ass, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
 