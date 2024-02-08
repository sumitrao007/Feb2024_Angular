// array is growable & shrinkable dynamically 
// array store homgenous data as well as hetrogenous data 

// let a:number[]=[10,20,30,40];
let a1:number[]=[];
let a2=[2.5,10,6];
let a3=[3,'Sumit'];
let a4:any[]=[2.5,'Sumit'];
// for(let i=0;i<a.length;i++){
//     console.log("Value array is "+a[i]);
// }
// console.log(a);
// console.log(a.join("  "));
// console.log(a.join());
// console.log(a3);

// push & pop
// LIFO => Last In First Out 

// a1.push(10);
// console.log(a1);
// a1.push(45,85,90);
// console.log(a1);
// let res=a1.pop();
// console.log(a1);
// console.log("Poped value is "+res);


let a:number[]=[10,20,30,40];

// console.log(a);
// a.splice(2,0,90);
// console.log(a);
// a.splice(2,0,78);
// console.log(a);

// a.splice(2,1);
// console.log(a);

// a.splice(4,1,100);
// console.log(a);
// a.splice(1,2);
// console.log(a);

let b:number[]=[2,3,4,5];
//map method 
// element by element 

// b.map()



// b.forEach((myvalue,i,arr)=>{
//     console.log(myvalue+" Index is "+i+" "+arr);
// });


let temp=b.map((value)=>{
    return (value*value);
});

// console.log(`
//     Original Array => ${b}
//     Square Array => ${temp}
// `);











