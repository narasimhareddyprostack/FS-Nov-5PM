let enames=['rahul','sonia','priyanka', 'modi']
//create new array,with uppercase  based on existing arrray

let new_Enames=enames.map(function(ename){
    return ename.toUpperCase()
})
console.log(enames)
console.log(new_Enames)