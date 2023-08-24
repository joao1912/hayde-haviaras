const icons = document.querySelectorAll(".icon")
let iconsVibrate = 0

vibrate()
function vibrate() {

    icons[iconsVibrate].classList.add("vibrate")

    setTimeout(() => {

        icons[iconsVibrate].classList.remove("vibrate")
        if (iconsVibrate == 3) {
            iconsVibrate = 0
        } else {
            iconsVibrate++
        }

        vibrate()
    }, 2000)
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
    alert("copiado(esse alerta vai ser Substituído)")
  }