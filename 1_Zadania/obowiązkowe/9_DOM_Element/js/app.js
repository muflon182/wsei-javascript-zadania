document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

     function getDatasInfo(elements) {
         let array = [];
         for(let i = 0; i < elements.length; i++) {
             array.push(elements[i].getAttribute('data-color'));

         }
         return array;
     }
     getDatasInfo(links);

     //Zadanie 1
     console.log(homeElement);
     console.log(childElements);
     console.log(banner);
     console.log(blocks);
     console.log(links);

     for(let i of childElements) console.log(`${i.tagName}, ${i.getAttribute('class')}`);
     for(let i of blocks) console.log(`${i.tagName}, ${i.getAttribute('class')}`);
     for(let i of links) console.log(`${i.tagName}, ${i.getAttribute('class')}`);

     //Zadanie 2

     blocks.forEach(function(block){
         console.log(block.innerHTML)
        console.log(block.outerHtML)
        block.innerHTML = "Nowa wartość diva o klasie blocks"
     })

     //Zadanie 3
     let mainID = document.getElementById("mainFooter");
     function getID(element){
         console.log(element.id);
         return element.id;

     }
     getID(mainID);

     //Zadanie 4

     function getTags(elements){
         let array = [];
         for(let item of elements) {
             array.push(item.tagName);
             
         }
         return array;
     }
     console.log(getTags(childElements));

     //Zadanie 5

     function getClassInfo(element){
         let array = [];
         //console.log(element.classList);
         for(let i = 0; i < element.classList.length; i++){
             array.push(element.classList[i]);
         }
         return array;
     }
     console.log(getClassInfo(banner));

     //Zadanie 6

     const liElements = document.querySelectorAll('nav li')
     function setDataDirection(elements){
         elements.forEach(function(element){
             if(!element.getAttribute('data-direction')){
                 element.setAttribute('data-direction', 'top')
             }
         })
     }
     setDatDirection(liElements);
});

