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
const txt = 'Moi c\'est Claude';
const txtSubtitle = 'Bienvenue sur mon Portfolio'

function typewriter(target, text, index) {
    if(index > 3) {
        subtitle.classList.add('active');
    }
    if(index > 6) {
        heroPushLink.classList.add('active');
    }
    if(index < text.length) {
        setTimeout(() => {
            target.textContent += text[index];
            typewriter(target, text, index + 1)
        }, 80)
    }
}

setTimeout(() => {
    typewriter(title, txt, 0)
}, 300)

setTimeout(() => {
    typewriter(subtitle, txtSubtitle, 0)
}, 1900)

// ######################################################
// #####                Down button                 ##### 
// ######################################################

heroPushLink.addEventListener('click', slidedown)

function slidedown(e) {
    e.preventDefault()
    window.scrollTo({
        top: document.querySelector(`${e.target.getAttribute("href")}`).offsetTop,
        behavior: "smooth"
    })
}

// ######################################################
// #####             Animations projets             ##### 
// ######################################################

const generalAnimatedElements = [
    ...document.querySelectorAll('h2'),
    ...document.querySelectorAll('.sectionSubtitle')
]

const discoverSectionElements = [
    document.querySelector('.textDiscoverContent p'),
    document.querySelector('.discoverLink'),
    document.querySelector('.discoverMainImage'),
]

const slideContent = [

    ...document.querySelectorAll('.sideApparitionContainer'),
    ...document.querySelectorAll('.sideApparitionContainer h3'),
    document.querySelector('.leftSkillsContent'),
    document.querySelector('.rightSkillsContent'),
    ...document.querySelectorAll('.skillsContainer h3'),
    ...document.querySelectorAll('.logoTools'),
    ...document.querySelectorAll('.toolsContainer h3'),
]

const animatedContents = [
    ...generalAnimatedElements,
    ...discoverSectionElements,
    ...slideContent
]

const intersectionObserver = new IntersectionObserver(handleIntersect, {rootMargin: '-10%'})

animatedContents.forEach(element => intersectionObserver.observe(element))

function handleIntersect(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
            intersectionObserver.unobserve(entry.target)
        }
    })
}

document.querySelector('.buttonMoreProject').addEventListener('click', () => {
    document.querySelectorAll('.hidedProject').forEach(element => {
        element.classList.remove('hidedProject');
        element.classList.add('showProject');
    })
    document.querySelector('.buttonMoreProject').textContent = 'Afficher Moins';
    document.querySelector('.buttonMoreProject').style.display='none';
})