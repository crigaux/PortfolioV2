document.querySelector('.figma').addEventListener('mouseover', () => {
    document.querySelector('.figma').src = "./assets/img/figma.svg";
})

document.querySelector('.figma').addEventListener('mouseout', () => {
    if(document.body.getAttribute('class') == "light") {
        document.querySelector('.figma').setAttribute('src', "./assets/img/figmaWhite.svg");
    } else {
        document.querySelector('.figma').setAttribute('src', "./assets/img/figmaBlack.svg");
    }
})

// ######################################################
// #####   Injection de class pour mode jour/nuit   ##### 
// ######################################################

const lightMode = document.getElementById('lightMode');

lightMode.addEventListener('change', () => {
    document.body.classList.toggle('light');
    if(document.querySelector('.figma').getAttribute('src') == "./assets/img/figmaBlack.svg") {
        document.querySelector('.figma').setAttribute('src', "./assets/img/figmaWhite.svg");
    } else {
        document.querySelector('.figma').setAttribute('src', "./assets/img/figmaBlack.svg");
    }
});