class Account{
    min_Bal=500 
    acc_Bal=0
    
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal +amount
    }
    withdrawl(amount){
        this.acc_Bal=this.acc_Bal -amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}
let a1=new Account() //Rahul
let a2=new Account() //Priyanka

console.log(a1)
console.log(a2)

a1.deposit_Amount(5000)
a1.deposit_Amount(100)
a1.withdrawl(20)
console.log(a1.get_Bal())
console.log(a1)
console.log(a2)