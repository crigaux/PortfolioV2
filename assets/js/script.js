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

// ######################################################
// #####            Curseur personnalisé            ##### 
// ######################################################

const customCursor = document.querySelector('.customCursor');

window.addEventListener('mousemove', handleCustomCursor);

function handleCustomCursor(e) {
    customCursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`
}

// ######################################################
// #####                Type Writer                ##### 
// ######################################################

const title = document.querySelector('h1');
const subtitle = document.querySelector('.subtitle');
const heroPushLink = document.querySelector('.heroLink');
const txt = "Moi c'est Claude";

function typewriter(text, index) {
    if(index > 3) {
        subtitle.classList.add('active');
    }
    if(index > 6) {
        heroPushLink.classList.add('active');
    }
    if(index < text.length) {
        setTimeout(() => {
            title.textContent += text[index];
            typewriter(text, index + 1)
        }, 200)
    }
}

setTimeout(() => {
    typewriter(txt, 0)
}, 300)