class Parent{
    constructor(){
        console.log("Parent Class constructor")
    }
}

class Child extends Parent {
    acc_Id;
    constructor(id){
        this.acc_Id=id
        console.log("Child Class constructor method")
    }
    get_Details(){
        console.log("Child Class get_Details method")
    }
}
let c1=new Child(101)
console.log(c1)