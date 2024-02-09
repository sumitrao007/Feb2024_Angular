//array of object 
let arrobj=[
    {
        id:9,
        fname:'Sumit',
        lname:'Raokhande',
        country:{
            cid:1,
            cname:'India'
        },
        month:["Jan","May","Dec"],
        result:[
            {
                subj:'M1',
                marks:40
            },
            {
                subj:'M2',
                marks:45
            },
            {
                subj:'M3',
                marks:50
            }
        ]
    },
    {
        id:3,
        fname:'Kiran',
        lname:'Raokhande',
        country:{
            cid:2,
            cname:'Us'
        },
        month:["Feb","Aug","Nov"],
        result:[
            {
                subj:'M1',
                marks:45
            },
            {
                subj:'M2',
                marks:49
            },
            {
                subj:'M3',
                marks:55
            }
        ]
    },
    {
        id:3,
        fname:'Spruha',
        lname:'Raokhande',
        country:{
            cid:3,
            cname:'Japan'
        },
        month:["march","July","Oct"],
        result:[
            {
                subj:'M1',
                marks:60
            },
            {
                subj:'M2',
                marks:75
            },
            {
                subj:'M3',
                marks:80
            }
        ]
    }
];

for(let i=0;i<arrobj.length;i++){
    console.log(`
        Id          :: ${arrobj[i].id}
        First Name  :: ${arrobj[i].fname}
        Last Name   :: ${arrobj[i].lname}
        Country     :: ${arrobj[i].country.cname}
        Month       :: ${arrobj[i].month.join(" ")}
        -----------Result------------
    `);
    for(let j=0;j<arrobj[i].result.length;j++){
        console.log(`
                Subject :: ${arrobj[i].result[j].subj}
                Marks   :: ${arrobj[i].result[j].marks}
        `)
    }
}