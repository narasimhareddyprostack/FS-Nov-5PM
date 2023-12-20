class Account{
    open_Account(){
        console.log("Account Opened Successfully")
    }
    deposit_Amount(){
        console.log("Amount Deposited")
    }
    withdrawl(){
        console.log("Amount withdrawl successfully")
    }
    get_Bal(){
        console.log("Displaying the bal")
    }
    get_St(){
        console.log("getting the stattement")
    }
    close_Account(){
        console.log("Closing the account")
    }
}
let a1=new Account()

a1.open_Account()
a1.deposit_Amount()
a1.withdrawl()
a1.get_Bal()
a1.get_St()
a1.close_Account()