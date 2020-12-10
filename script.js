var character = document.getElementById("character");
var block = document.getElementById("block")
var counter = 0; 
document.addEventListener("keypress",jump);

function jump(){
    
    character.classList.add("animate");
    setTimeout(function(){character.classList.remove("animate")},300); // time of jump animation = 300ms    
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. Score: "+ document.getElementById("scoreSpan").innerHTML);
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);