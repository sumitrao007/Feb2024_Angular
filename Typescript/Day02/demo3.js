// anonymous function
// function does not have any name 
// it execute there itself in angular internal freamwork
var temp1 = function () {
    console.log("U r in first type of anonymous function");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
var res = temp2(10, 2);
// console.log("Result is "+res);
// fat arrow function/Arrow function 
var temp3 = function () {
    console.log("Fat arrow function is called ..");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
var res1 = temp4(10, 4);
console.log("Result is " + res1);
