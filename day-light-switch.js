document.addEventListener('DOMContentLoaded', function () {
    function applyDarkModeStyles() {
        requestAnimationFrame(() => {
            document.body.classList.add("dark-mode");
            document.getElementById("logo").src = "./resources/gr-logo-w.png";
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            document.querySelector("header").style.backgroundColor = 'black';
            document.querySelector("header").style.color = 'white';
            let h2Elements = document.querySelectorAll("h2");
            h2Elements.forEach(function (h2) {
                h2.style.borderBottom = '1px solid white';
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
                
                button.addEventListener('mouseover', () => {
                    button.style.backgroundColor = 'white';
                    button.style.color = 'black'
                });
                button.addEventListener('mouseout', () => {
                    // Change the button's background color back to its original color
                    button.style.backgroundColor = 'black';
                    button.style.color = 'white';
                });
            });

        });
    }
    function applyLightModeStyles() {
        requestAnimationFrame(() => {
            document.body.classList.remove("dark-mode");
            document.getElementById("logo").src = "./resources/gr-logo.png";
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
                button.style.borderColor= '';
                button.style.backgroundColor= ''
                button.style.color= '';
            });
            buttonElements.forEach(function (button) {
                button.addEventListener('mouseover', () => {
                    button.style.backgroundColor = 'black';
                    button.style.color = 'white'
                });
                button.addEventListener('mouseout', () => {
                    button.style.backgroundColor = 'white';
                    button.style.color = 'black';
                });
            });
        });
        
    }

    // Add hover styles for buttons
    

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    if (prefersDark.matches) {
        applyDarkModeStyles();
    } else {
        applyLightModeStyles();
    }

    let darkModeButton = document.getElementById('dark-mode');
    let lightModeButton = document.getElementById('light-mode');

    darkModeButton.addEventListener('click', function () {
        toggleUserMode(true); // Switch to dark mode
    });

    lightModeButton.addEventListener('click', function () {
        toggleUserMode(false); // Switch to light mode
    });

    function toggleUserMode(userPrefersDarkMode) {
        if (userPrefersDarkMode) {
            applyDarkModeStyles();
        } else {
            applyLightModeStyles();
        }
    }
});