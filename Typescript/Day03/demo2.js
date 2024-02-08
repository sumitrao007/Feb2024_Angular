// Json Object 
// Key & value Format
var jsonObj = {
    id: 9,
    'fname': 'Sumit',
    lname: 'Raokhande'
};
// 1 dot operator
//2 Square Operator
// 1 dot operator
// console.log(`
//     ID          :: ${jsonObj.id}
//     First Name  :: ${jsonObj.fname}
//     Last name   :: ${jsonObj.lname}
// `);
// 2 Square Operator
console.log("\n    ID          :: ".concat(jsonObj["id"], "\n    First Name  :: ").concat(jsonObj['fname'], "\n    Last name   :: ").concat(jsonObj["lname"], "\n"));
