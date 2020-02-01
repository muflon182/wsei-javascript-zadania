let parents = document.querySelectorAll('.parent');
for(let i = 0; i < parents.length; i++){
    addEvents.addEvents(parents[i]);
}
function addEvents(element) {
    element.addEventListener('mouseover', function(){
        element.children[0].style.display = 'block';
    })
    element.addEventListener('mouseover', function(){
        element.children[0].style.display = 'none';
    })
}