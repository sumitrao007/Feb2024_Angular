// anonymous function
// function does not have any name 
// it execute there itself in angular internal freamwork

 let temp1=function (){
        console.log("U r in first type of anonymous function")
    }

    // temp1();

  let temp2= function (a:number,b:number):number{
        return (a+b);
    }

    let res=temp2(10,2);
    // console.log("Result is "+res);

    // fat arrow function/Arrow function 

    let temp3= ()=>{
            console.log("Fat arrow function is called ..")
        }

        // temp3();

    let temp4= (a:number,b:number):number=>{
            return (a+b);
        }

        let res1=temp4(10,4);
        console.log("Result is "+res1);
