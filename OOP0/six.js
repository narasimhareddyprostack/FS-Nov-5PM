class Emp{
    eid;
    ename;
    esal=10
    get_Salary(){
        console.log(this.esal)
    }
}
let e1=new Emp()
let e2=new Emp()
console.log(e1)
console.log(e2)

e1.get_Salary()
e2.get_Salary()