src = document.querySelector('#sources .content');

function toggle() {
    if (src.style.display == 'none') {
        src.style.display = 'block';
    }
    else {
        src.style.display = 'none';
    }
}


const images = document.querySelectorAll('#second img');
const buttons = document.querySelectorAll('.button');
images.forEach(image => image.addEventListener('mouseover', hover));
images.forEach(image => image.addEventListener('mouseout', stopHover));
buttons.forEach(button => button.addEventListener('mouseover', hover));
buttons.forEach(button => button.addEventListener('mouseout', stopHover));

function hover(e) {
    this.classList.add('hovering');
} 

function stopHover(e) {
    this.classList.remove('hovering');
}
