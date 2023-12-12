let img2strhandler = ()=>{
    //alert('Test')
    let imagefile=document.getElementById('imagefile').files[0]
    console.log(imagefile)
    let reader=new FileReader();
    reader.readAsDataURL(imagefile)
    reader.addEventListener("load",()=>{
        //console.log(reader.result)
        document.getElementById('abc').innerHTML=reader.result;
        document.getElementById('img2').src=reader.result
    })
    return false
}