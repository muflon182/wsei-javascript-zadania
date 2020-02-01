document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    const elements = document.querySelectorAll('.ex5 li');
    for (let i = 0; i < elements.length; i++){
        if (i % 2 == 0) {
            elements[i].style.backgroundColor = "green";
        }
        if (i % 3) {
            elements[i].style.textDecoration = "underline";
        }
    }
    elements[4].className = 'big';

    //Zadanie1

    let operaElement = document.querySelector('.chrome');
    let edgeElement = document.querySelector('.edge');
    let firefoxElement = document.querySelector('.firefox');

    edgeElement.style.backgroundImage = 'url("./assets/img/edge.png")';
    firefoxElement.style.backgroundImage = 'url("./assets/img/firefox.png")';
    
    chrome.Element.nextElementSibling.setAttribute('href', 'http://google.com');
    edge.Element.nextElementSibling.setAttribute('href', 'http://microsoft.com');
    firefox.Element.nextElementSibling.setAttribute('href', 'http://firefox.com');

    chromeElement.nextElementSibling.innerHTML = 'Google Chrome';
    firefoxElement.nextElementSibling.innerHTML = 'Mozilla Firefox';

    chromeElement.style.width = '100px';
   
    //Zadanie2

    let name = document.querySelector('#name');
    let color = document.querySelector('#fav_color');
    let meal = document.querySelector('#fav_meal');

    name.innerHTML = 'Kamil';
    color.innerHTML = 'niebieski';
    meal.innerHTML = 'oscypek';

    //Zadanie3

    let ex3 = document.querySelector('ex3');
    ex3.querySelector('ul').classList.add('menu');
    let liEx3 = ex3.querySelectorAll('li');

    for(let i = 0; i < liEx3.length; i++) {
        liEx3[i].classList.add('menuElement');
        liEx3[i].classList.remove('error');

    }

    //Zadanie4

    let liEx4 = document.querySelectorAll('.ex4 li');
    for(i = 0; i < liEx4.length; i++){
        liEx4[i].setAttribute('data-id', i+1 )
    }

});