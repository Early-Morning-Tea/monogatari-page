src = document.querySelector('#sources .content');

function toggle() {
    if (src.style.display == 'none') {
        src.style.display = 'block';
    }
    else {
        src.style.display = 'none';
    }
}