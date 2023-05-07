function roll(){
    var num1 = Math.floor(Math.random() *6)+1
    var num2 = Math.floor(Math.random() *6)+1
    console.log(num1 + " " + num2)
    var img1 = document.querySelector(".dice .img1")
    var img2 = document.querySelector(".dice .img2")
    setimg(img1,num1)
    setimg(img2,num2)
    
    if(num1 > num2){
        document.getElementById("winner").innerHTML = "Player 1 Wins !!!"
    }else if(num1 < num2){
        document.getElementById("winner").innerHTML = "Player 2 Wins !!!"
    }else{
        document.getElementById("winner").innerHTML = "Wow !!! Its a Tie"
    }

    
}
function setimg(img,dicenum){
    var sourceimg = "/images/dice"+dicenum+".png";
    img.setAttribute("src",sourceimg)
    
}
