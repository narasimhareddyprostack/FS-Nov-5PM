class Account{
    constructor(){
        console.log("Accont class constructor")
    }
}
class SA extends Account{
    constructor(){
        super()
        console.log("SA class Constructor")
    }
}
class CA extends Account{
    constructor(){
        super()
        console.log("CA class Constructor")
    }
}


new SA()
new CA()