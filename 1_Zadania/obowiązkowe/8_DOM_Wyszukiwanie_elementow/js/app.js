document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

     let elementWithClassTitle = document.querySelector('.title');
     function getDataAnimation(element) {
         let variable = element.getAttribute('data-animation');
         return variable;
         
     }
     getDataAnimation(elementWithClassTitle);

     let home = document.querySelector('#home');
     let home2 = document.getElementById('home');
     let firstLi = document.querySelector('li[data-direction]');
     let firstBlock = document.querySelector('.block');

     //Zadanie 2
     let liElements = document.querySelectorALL('nav li');
     let paragraphElements = document.querySelectorAll('div p');
     let divElements...
});
