document.addEventListener('DOMContentLoaded', function () {
    const dynamicText = document.getElementById('dynamic-text');
    const professions = [' an Electronics Engineer', ' a Hardware & Software Developer'];
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let forwardTyping = true;

    function animateText() {
        const currentText = professions[currentIndex];
        if (forwardTyping) {
            if (charIndex < currentText.length) {
                dynamicText.textContent += currentText.charAt(charIndex);
                charIndex++;
            } else {
                forwardTyping = false;
            }
        } else {
            if (charIndex > 0) {
                dynamicText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                forwardTyping = true;
                currentIndex = (currentIndex + 1) % professions.length;
            }
        }
    }

    setInterval(animateText, 200); // Adjust typing speed (milliseconds)

    dynamicText.style.fontFamily = 'Poppins, sans-serif';
});

const navLinks = document.querySelectorAll('nav ul li a'); // Selects all the links within your navigation

navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});