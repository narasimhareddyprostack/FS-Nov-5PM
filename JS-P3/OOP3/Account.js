class Account{
    constructor(){
        console.log("Account class constrcutor")
    }
}
class SA extends Account{
    constructor(id,name){
        super()
    }
}
class CA extends Account{
    constructor(id,name){
        super()
    }
}

let sa=new SA(101,'Rahul')
let ca=new CA(102,'Priyanka')