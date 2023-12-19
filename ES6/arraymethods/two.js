let enames=['rahul','sonia','priyanka']
//create new array,with uppercase  based on existing arrray

let new_Enames=[]
for(ename of enames){
        new_Enames.push(ename.toUpperCase())
        //new_Enames.push("Mounish")
}

console.log(enames)
console.log(new_Enames)