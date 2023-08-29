const icons = document.querySelectorAll(".icon")
const pinLoc = document.getElementById("iconPinLocal")
let iconsVibrate = 0

vibrate()
function vibrate() {

    icons[iconsVibrate].classList.add("vibrate")
    pinLoc.classList.toggle("vibrate")
    setTimeout(() => {

        icons[iconsVibrate].classList.remove("vibrate")
        if (iconsVibrate == 3) {
            iconsVibrate = 0
        } else {
            iconsVibrate++
        }
       
        vibrate()
    }, 2000)
    
    setTimeout(() => {
         pinLoc.classList.remove("vibrate")
        
    }, 1000)
}

function copyEmail() {
    
    const email = "happybaby.homeopatia@hotmail.com";
    var tempInput = document.createElement("input");
    tempInput.setAttribute('value', email);
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

const emailIcon = document.getElementById("email")
emailIcon.addEventListener("click", function() {
    const positionAnimation = document.getElementById("local")
    positionAnimation.classList.add("copyAnimation")
    setTimeout(() => {
        positionAnimation.classList.remove("copyAnimation")
    }, 2000)
})

const containerEndereco = document.getElementById("containerEndereco")
const botaoEndereco = document.getElementById("endereco")
const btnClose = document.getElementById("btnClose")
botaoEndereco.addEventListener("click", () => {
    containerEndereco.style.display = "flex"
    btnClose.addEventListener("click", closeContainerLoc)
})

function closeContainerLoc() {
   
    containerEndereco.style.display = "none"
    btnClose.removeEventListener("click", closeContainerLoc)
    
}
