function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function navigateSmoothly(url) {
    // Add a fade-out class to the body
    document.body.classList.add('fade-out');
    // Wait for the animation to complete before navigating
    setTimeout(() => {
        location.href = url;
    }, 500); // Match the transition duration in CSS
}
function moveSlider(direction) {
    const container = document.querySelector('.projects-container');
    const cardWidth = document.querySelector('.project-card').offsetWidth;
    const currentScroll = container.scrollLeft;

    if (direction === 'next') {
        container.scrollLeft = currentScroll + cardWidth;
    } else {
        container.scrollLeft = currentScroll - cardWidth;
    }
     container.scrollTo({
left: targetScroll,
behavior: 'smooth'
});
}
