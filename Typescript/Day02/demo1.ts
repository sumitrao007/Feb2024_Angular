// data type 
// number (int,long,short,double,float ), string(""/''),boolean(true/false)
// any => number,string,boolean
// void  => neutral => it does not point anything 
// misec null  & undefined => u can use as data type as well as value 

let a:number=10;
// console.log("Value of a is "+a);

let str!:string;
// console.log('Value of str '+str);
str='Sumit';
// console.log('Value of str '+str);
let c:any;

c=2.5;
// console.log("Value of c is "+c);
// c='Sumit';
// console.log("Value of c is "+c);
// c=true;
// console.log("Value of c is "+c);

let d;
let s=78;

// Type assertion 
//  any / Object/unknown
let h:any;

// 1 angle bracket => u can use in ts file 
// 2 as syntax => u can use in ts as well as html(view file ) 
// 1 angle bracket

let temp=(<string> h);
// temp.

// 2 as syntax

let temp2=(h as string);
// temp2.

// operator 
// Airthmathic => +,-,*,/,%
// Bitwise => &,|,^,~,>>,<<
// logical=> &&,||,!
// relational => <,>,<=,>=,!=, == (it checks only value ) ,===(Strongly equality it checks data type as well as value of the variable a===b )
// assignament => =,+=,-=,*=,/=,%=
// ternary => condition?Expression1:expression2
// unary => post/pre inc/dec ++a,a--;

// control & sequaltial
// if , if-esle,nested if-else, switch,break,continue

let count=2;
// if(count<4){
//     console.log("Condition is true");
// }else{
//     console.log("Condition is true");
// }

let choice=21;

// switch(choice){
//     case 1: console.log("U r in case 1");
//             break;
//     case 2: console.log("U r in case 2");
//             break;
//     default: console.log("U r in default case ");
//             break;
// }

// Loop 
// while,do-while,for
// for(let i=0;i<4;i++){
//     console.log("Value of i is "+i);
// }






