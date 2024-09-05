function navigateTo(url, direction = 'left') {
    const mainContent = document.getElementById('main-content');
    
    // Odstranění předchozích tříd animace
    mainContent.classList.remove('slide-in-from-left', 'slide-in-from-right', 'slide-in-from-top', 'slide-in-from-bottom', 'slide-out-to-left', 'slide-out-to-right', 'slide-out-to-top', 'slide-out-to-bottom');
    
    // Add the appropriate slide-out class based on direction
    switch(direction) {
        case 'right':
            mainContent.classList.add('slide-out-to-right');
            break;
        case 'up':
            mainContent.classList.add('slide-out-to-top');
            break;
        case 'down':
            mainContent.classList.add('slide-out-to-bottom');
            break;
        case 'left':
        default:
            mainContent.classList.add('slide-out-to-left');
            break;
    }
    
    setTimeout(() => {
        window.location.href = url;
    }, 300); // odpovídá délce animace
}

function showPopup(event) {
    event.preventDefault();
    const popup = document.getElementById('popup');
    const countdown = document.getElementById('countdown');
    let timeLeft = 3;

    popup.style.display = 'block';

    const countdownInterval = setInterval(() => {
        if (timeLeft > 0) {
            countdown.textContent = timeLeft;
            timeLeft--;
        } else {
            clearInterval(countdownInterval);
            window.location.href = '../index.html';
        }
    }, 1000);
}

// animace otevření a zavření hamburger menu
function toggleMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const closeIcon = document.querySelector('.close-icon');
    if (menuOverlay.classList.contains('open')) {
        menuOverlay.classList.remove('open');
        menuOverlay.classList.add('close');
        setTimeout(() => {
            menuOverlay.style.display = 'none';
        }, 500); // Duration of the animation should match the CSS animation duration
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        menuOverlay.style.display = 'block';
        menuOverlay.classList.remove('close');
        menuOverlay.classList.add('open');
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
}
