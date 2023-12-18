class Parent{
    constructor(){
        console.log("Parent Class -constructor")
    }
}
class Child extends Parent{
    constructor(){
        super()
        console.log("Child Class -constructor")
    }
}
let c1=new Child()