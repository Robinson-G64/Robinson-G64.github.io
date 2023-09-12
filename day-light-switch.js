let logoImg = document.header.children[0];
logoImg.src = './resources/gr-log-w.png';

function darken () {
    document.getElementById("logo").src="./resources/gr-log-w.png";
    document.parentNode.style.backgroundColor = 'black';
    document.parentNode.style.color = 'white';
}

function lighten () {
    document.getElementById("logo").src="./resources/gr-logo.png";
    document.style.backgroundColor = 'black';
    document.style.color = 'white';
}


