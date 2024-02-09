//array of object 
var arrobj = [
    {
        id: 9,
        fname: 'Sumit',
        lname: 'Raokhande',
        country: {
            cid: 1,
            cname: 'India'
        },
        month: ["Jan", "May", "Dec"],
        result: [
            {
                subj: 'M1',
                marks: 40
            },
            {
                subj: 'M2',
                marks: 45
            },
            {
                subj: 'M3',
                marks: 50
            }
        ]
    },
    {
        id: 3,
        fname: 'Kiran',
        lname: 'Raokhande',
        country: {
            cid: 2,
            cname: 'Us'
        },
        month: ["Feb", "Aug", "Nov"],
        result: [
            {
                subj: 'M1',
                marks: 45
            },
            {
                subj: 'M2',
                marks: 49
            },
            {
                subj: 'M3',
                marks: 55
            }
        ]
    },
    {
        id: 3,
        fname: 'Spruha',
        lname: 'Raokhande',
        country: {
            cid: 3,
            cname: 'Japan'
        },
        month: ["march", "July", "Oct"],
        result: [
            {
                subj: 'M1',
                marks: 60
            },
            {
                subj: 'M2',
                marks: 75
            },
            {
                subj: 'M3',
                marks: 80
            }
        ]
    }
];
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n        Id          :: ".concat(arrobj[i].id, "\n        First Name  :: ").concat(arrobj[i].fname, "\n        Last Name   :: ").concat(arrobj[i].lname, "\n        Country     :: ").concat(arrobj[i].country.cname, "\n        Month       :: ").concat(arrobj[i].month.join(" "), "\n        -----------Result------------\n    "));
    for (var j = 0; j < arrobj[i].result.length; j++) {
        console.log("\n                Subject :: ".concat(arrobj[i].result[j].subj, "\n                Marks   :: ").concat(arrobj[i].result[j].marks, "\n        "));
    }
}
