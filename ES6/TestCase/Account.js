class Account{
    acc_Name;
    acc_Email;
    acc_Addr
    constructor(name,email,loc){
        this.acc_Name=name;
        this.acc_Email=email
        this.acc_Addr=loc
    }
}


//export default Account  //ES6 
module.exports=Account  //ES5