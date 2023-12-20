//what is spread operator
//applicable for array and objects
/*
    1.create new Arrays/Objects
    2.Merge arrays/objects
    3.extending arrays /objects
*/
let ids=[101,102,103,104]
let new_Ids=[...ids]    
console.log(new_Ids)

let a=[10,20,30,40] 
let b=[30,40,50,60]
let c =[...a,...b]
console.log(c)

let d=[...a,50,60,70,80]
console.log(d)