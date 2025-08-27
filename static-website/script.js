// Simple greeting based on time
const greeting = document.createElement('p');
const hour = new Date().getHours();

if(hour < 12) {
    greeting.textContent = "Good morning! ☀️";
} else if(hour < 18) {
    greeting.textContent = "Good afternoon! 🌤️";
} else {
    greeting.textContent = "Good evening! 🌙";
}

document.querySelector('header').appendChild(greeting);

// Fade-in sections on scroll
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.animation = "fadeIn 1.5s forwards";
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));
