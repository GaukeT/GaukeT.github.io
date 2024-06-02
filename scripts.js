// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const navMenuIcon = document.getElementById('navMenuIcon');
    const navMenu = document.getElementById('navMenu');

    navMenuIcon.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('nav ul li a');

    for (let link of navLinks) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            // Close the menu after clicking a link on mobile
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    }

    // Code for the animated effect on the home screen name
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    function loadingWord(event) {
        let iteration = 0;
        
        clearInterval(interval);
        
        interval = setInterval(() => {
            event.innerText = event.innerText
                .split("")
                .map((letter, index) => {
                    if(index < iteration) {
                        return event.dataset.value[index];
                    }
                
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
            
            if(iteration >= event.dataset.value.length) { 
                clearInterval(interval);
            }
            
            iteration += 1 / 4;
        }, 30);
    }

    const h1Element = document.getElementById("h1");

    if (h1Element) {
        loadingWord(h1Element);

        h1Element.onmouseover = event => loadingWord(event.target);
    }
});
