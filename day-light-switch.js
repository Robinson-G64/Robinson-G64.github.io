document.addEventListener('DOMContentLoaded', function () {
    let darkModeButton = document.getElementById('dark-mode');
    let lightModeButton = document.getElementById('light-mode');
    
    function darken() {
        document.getElementById("logo").src="./resources/gr-logo-w.png";
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.querySelector("header").style.backgroundColor = 'black';
        document.querySelector("header").style.color = 'white';
       
        let h2Elements = document.querySelectorAll("h2");
        h2Elements.forEach(function (h2) {
            h2.style.borderBottom = ' 1px solid white';
        });
        let h3Elements = document.querySelectorAll("h3");
        h3Elements.forEach(function (h3) {
            h3.style.borderBottom = '1px solid white';
        });
        let buttonElements = document.querySelectorAll("button");
        buttonElements.forEach(function (button) {
            button.style.borderColor= 'white';
            button.style.backgroundColor= 'black'
            button.style.color= 'white';
        });
    }

    function lighten() {
        document.getElementById("logo").src="./resources/gr-logo.png";
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.querySelector("header").style.backgroundColor = 'white';
        document.querySelector("header").style.color = 'black';
        let h2Elements = document.querySelectorAll("h2");
        h2Elements.forEach(function (h2) {
            h2.style.borderBottom = '1px solid black';
        });
        let h3Elements = document.querySelectorAll("h3");
        h3Elements.forEach(function (h3) {
            h3.style.borderBottom = '1px solid black'; 
        });
        let buttonElements = document.querySelectorAll("button");
        buttonElements.forEach(function (button) {
            button.style.borderColor= 'black';
            button.style.backgroundColor= 'white'
            button.style.color= 'black';
        });
        let buttonHoverElements = document.querySelectorAll("button:hover");
        buttonElements.forEach(function (button) {
            button.style.borderColor= 'black';
            button.style.backgroundColor= 'black'
            button.style.color= 'white';
        });
    }
    
    darkModeButton.addEventListener('click', darken);
    lightModeButton.addEventListener('click', lighten);
});