const getColor = ()=>{
    //hex code
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode= '#'+randomNumber.toString(16);
    
    document.body.style.backgroundColor=randomCode;
    document.getElementById("colorCode").innerText=randomCode;
    document.getElementById("colorCode").style.color='white'
}

//event call
document.getElementById("btn").addEventListener("click",getColor)

//initial call color
getColor();