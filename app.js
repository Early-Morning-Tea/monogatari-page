src = document.querySelector('#sources .content');

function toggle() {
    console.log("Entered toggle()");
    console.log(src.style.display);
    if (src.style.display == 'none') {
        src.style.display = 'block';
    }
    else {
        src.style.display = 'none';
    }
}

const images = document.querySelectorAll('#second img');
const buttons = document.querySelectorAll('.button');
const links = document.querySelectorAll(".links");
images.forEach(image => image.addEventListener('mouseover', hover));
images.forEach(image => image.addEventListener('mouseout', stopHover));
buttons.forEach(button => button.addEventListener('mouseover', hover));
buttons.forEach(button => button.addEventListener('mouseout', stopHover));
console.log(links);
links.forEach(link => link.addEventListener('click', setToVisited));

function hover(e) {
    this.classList.add('hovering');
} 

function stopHover(e) {
    this.classList.remove('hovering');
}

function setToVisited(e) {
    links.forEach(link => link.classList.remove("selected"));
    this.classList.add("selected");
}