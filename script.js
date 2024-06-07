document.body.addEventListener('click', function () {
    // ... (rest of the click event code) 

    const confettiContainer = document.querySelector('.confetti');
    const hbdContainer = document.querySelector('.hbd-text-floating');

    // Confetti and Happy Birthday Text
    for (let i = 0; i < 300; i++) { // More confetti
        const confetti = document.createElement('div');
        confettiContainer.appendChild(confetti);
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 5 + 's'; 
        confetti.style.backgroundColor = getRandomColor();

        if (i % 10 === 0) { // Every 10th confetti is a "Happy Birthday"
            const hbdText = document.createElement('div');
            hbdText.textContent = 'Happy Birthday!';
            hbdContainer.appendChild(hbdText);
            hbdText.style.left = Math.random() * 100 + 'vw';
            hbdText.style.animationDelay = Math.random() * 5 + 's';
        }
    }

    // Single Photo (replace with your image URL)
    const photoUrl = 'https://media.licdn.com/dms/image/D4D03AQFYm2EX0jNzEg/profile-displayphoto-shrink_200_200/0/1691177957597?e=2147483647&v=beta&t=bfWBeu3rSP-0ZcmMQXPn3fkb6CnQFP1jODwIIpl1OoQ';
    const photoContainer = document.querySelector('.photo-container');
    const img = document.createElement('img');
    img.src = photoUrl;
    img.classList.add('rotating-photo');
    photoContainer.appendChild(img);
});

// ... (rest of the functions - getRandomColor)

