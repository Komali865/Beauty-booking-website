const form = document.getElementById('appointment-form');
const confirmation = document.getElementById('confirmation-message');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload
    confirmation.style.display = 'block';
    form.reset();
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector(".btn").addEventListener("click", function() {
    alert("Thank you! Booking feature coming soon.");
});
    const services = [
    { title: "Hair Styling", desc: "Professional hair styling for any occasion.", img: "https://via.placeholder.com/200x200.png?text=Hair+Styling" },
    { title: "Facial Treatments", desc: "Relaxing facials for glowing skin.", img: "https://via.placeholder.com/200x200.png?text=Facial" },
    { title: "Bridal Makeup", desc: "Make your special day unforgettable.", img: "https://via.placeholder.com/200x200.png?text=Bridal+Makeup" }
];

const servicesSection = document.getElementById("services");

servicesSection.innerHTML = ""; // Clear old content

services.forEach(service => {
    const card = document.createElement("div");
    card.classList.add("service-card");

    card.innerHTML = `
        <img src="${service.img}" alt="${service.title}">
        <h3>${service.title}</h3>
        <p>${service.desc}</p>
    `;

    servicesSection.appendChild(card);
});
