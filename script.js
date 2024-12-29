function watchVideo() {
    window.open("https://www.youtube.com/watch?v=NEW_YEAR_VIDEO_LINK", "_blank");
}
// Countdown timer
function countdown() {
    const newYearDate = new Date("Jan 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = newYearDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        document.getElementById("timer").innerHTML = "Happy New Year!";
    }
}

// Update countdown every second
setInterval(countdown, 1000);
// Toggle music play/pause
function toggleMusic() {
    var music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
function confettiEffect() {
    const colors = ["#ffcc00", "#ff6699", "#66ccff", "#99ff66"];
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    function generateConfetti() {
        const confetti = {
            x: Math.random() * canvas.width,
            y: -10,
            size: Math.random() * 5 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 5 + 1
        };
        return confetti;
    }

    const confettiArray = [];
    for (let i = 0; i < 100; i++) {
        confettiArray.push(generateConfetti());
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < confettiArray.length; i++) {
            const c = confettiArray[i];
            ctx.fillStyle = c.color;
            ctx.beginPath();
            ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
            ctx.fill();

            c.y += c.speed;
            if (c.y > canvas.height) {
                confettiArray[i] = generateConfetti();
            }
        }

        requestAnimationFrame(drawConfetti);
    }

    drawConfetti();
}
function addUserWish() {
    const userWish = document.getElementById("userWish").value;
    const wishDisplay = document.getElementById("wishDisplay");
    if (userWish) {
        const newWish = document.createElement("p");
        newWish.textContent = `Your Wish: ${userWish}`;
        wishDisplay.appendChild(newWish);
    }
}
window.onload = function() {
    document.getElementById("loading-screen").style.display = "none";
}
function personalizeWish() {
    const userName = document.getElementById("name").value;
    const personalizedDiv = document.getElementById("personalizedWish");
    if (userName) {
        personalizedDiv.innerHTML = `Happy New Year, <strong>${userName}</strong>! May this year bring you success and happiness! 🎉`;
    } else {
        personalizedDiv.innerHTML = "Please enter your name to personalize your wish!";
    }
}
function openChat() {
    document.getElementById("chatBox").style.display = "block";
    document.getElementById("messages").innerHTML = "<p>Hi! I'm your New Year assistant! 🎉</p><p>How can I help you today?</p>";
}

function sendMessage() {
    const userMessage = document.getElementById("userMessage").value;
    const messagesDiv = document.getElementById("messages");

    if (userMessage) {
        messagesDiv.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
        setTimeout(() => {
            messagesDiv.innerHTML += `<p><strong>Bot:</strong> Happy New Year! 🎉 Wishing you a wonderful year ahead!</p>`;
        }, 1000);
        document.getElementById("userMessage").value = "";
    }
}
let slideIndex = 1;

function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("lightbox-slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function generateCard() {
    const userName = document.getElementById("userName").value;
    const cardContainer = document.getElementById("cardContainer");

    if (userName) {
        cardContainer.style.display = "block";
        cardContainer.innerHTML = `
            <h3>Happy New Year, <strong>${userName}</strong>!</h3>
            <p>May this year bring you lots of joy, success, and happiness! 🎉</p>
            <button class="btn" onclick="downloadCard()">Download Card</button>
        `;
    } else {
        alert("Please enter your name to generate the card.");
    }
}

function downloadCard() {
    const cardContainer = document.getElementById("cardContainer");
    const cardHtml = cardContainer.innerHTML;

    const link = document.createElement('a');
    link.href = 'data:text/html,' + encodeURIComponent(cardHtml);
    link.download = 'New_Year_Card.html';
    link.click();
}
function changeBackground() {
    const selectedBackground = document.getElementById("backgroundSelect").value;
    document.getElementById("cardContainer").style.backgroundImage = `url(${selectedBackground})`;
}
function celebrate() {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");

    let particles = [];
    const colors = ["#ffcc00", "#ff9900", "#ff3300", "#ff0066"];

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 5;
            this.speedX = Math.random() * 5 - 2.5;
            this.speedY = Math.random() * 5 + 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.size -= 0.05;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function createConfetti() {
        if (particles.length < 100) {
            particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
        }
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        createConfetti();

        particles.forEach((particle, index) => {
            particle.update();
            particle.draw();
            if (particle.size <= 0) {
                particles.splice(index, 1);
            }
        });

        requestAnimationFrame(animateConfetti);
    }

    animateConfetti();
}
function submitPoll() {
    const selectedOption = document.querySelector('input[name="resolution"]:checked');
    const resultDiv = document.getElementById("pollResult");

    if (selectedOption) {
        resultDiv.innerHTML = `Your New Year resolution is: <strong>${selectedOption.value}</strong>! 🎯`;
    } else {
        resultDiv.innerHTML = "Please select an option!";
    }
}
function shareOnSocialMedia() {
    // Link to your card or website (example)
    const shareUrl = "https://www.yourwebsite.com/newyear-card";
    const text = "Check out my personalized New Year card! 🎉";

    // Example for Facebook
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${text}`, '_blank');
}
function createFireworks() {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    const fireworks = [];
    const colors = ["#ff007f", "#ffcc00", "#00ff00", "#00bfff"];

    class Firework {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 3 + 3;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.speed = Math.random() * 4 + 1;
            this.angle = Math.random() * 2 * Math.PI;
        }

        update() {
            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed;
            this.size -= 0.05;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function createExplosion() {
        if (fireworks.length < 50) {
            fireworks.push(new Firework(Math.random() * canvas.width, Math.random() * canvas.height));
        }
    }

    function animateFireworks() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        createExplosion();

        fireworks.forEach((firework, index) => {
            firework.update();
            firework.draw();
            if (firework.size <= 0) {
                fireworks.splice(index, 1);
            }
        });

        requestAnimationFrame(animateFireworks);
    }

    animateFireworks();
}

setTimeout(createFireworks, 1000);  // Fireworks after 1 second of page load
function showHoroscope() {
    const zodiac = document.getElementById("zodiacSign").value;
    const result = document.getElementById("horoscopeResult");

    const horoscopes = {
        aries: "This year, expect new opportunities to shine in your career and personal life.",
        taurus: "Financial growth is on the horizon for you in 2025. Keep an eye on new investment opportunities.",
        gemini: "Love and relationships will take a major leap forward this year. Expect good fortune in your personal life.",
        cancer: "This year brings positive changes in your health and fitness. Keep pushing yourself for better well-being.",
        leo: "A big career move is coming. Prepare yourself to lead and inspire those around you.",
        virgo: "2025 will bring stability and peace. Your hard work will finally pay off in unexpected ways.",
        libra: "Expect exciting adventures and new travel opportunities this year. The world is your oyster!",
        scorpio: "This year, focus on personal growth and introspection. Big changes are ahead for you.",
        sagittarius: "Your creative energy will be high in 2025. Harness it to achieve great things in your projects.",
        capricorn: "Hard work will lead to recognition this year. Stay determined, and you'll achieve your goals.",
        aquarius: "This year is all about expanding your social circle and building strong, lasting relationships.",
        pisces: "Expect creative inspiration and personal growth this year. Your dreams are within reach."
    };

    result.innerHTML = `Your Horoscope: <strong>${horoscopes[zodiac]}</strong>`;
}
const quotes = [
    "New Year, new beginnings!",
    "May the year ahead bring you happiness and success!",
    "Cheers to a fresh start and a bright future ahead!",
    "The future is bright, let's celebrate the present!",
    "New Year is the time to embrace new adventures and opportunities."
];

function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}

displayQuote();
function submitPlans() {
    const plans = document.getElementById("plans").value;
    document.getElementById("userPlans").innerHTML = `Your New Year Resolution: <strong>${plans}</strong>`;
}
function sendInvite() {
    const friendName = document.getElementById("friendName").value;
    const inviteMessage = `You have invited ${friendName} to the New Year Party!`;
    document.getElementById("inviteMessage").innerHTML = inviteMessage;
}
function submitWish() {
    const wish = document.getElementById("userWish").value;
    const gallery = document.getElementById("gallery");

    const wishCard = document.createElement("div");
    wishCard.classList.add("wish-card");
    wishCard.innerHTML = `<p>${wish}</p>`;

    gallery.appendChild(wishCard);
    document.getElementById("userWish").value = "";  // Clear the input after sharing
}
let recorder, audioStream;

async function startRecording() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioStream = stream;
    recorder = new MediaRecorder(stream);
    recorder.ondataavailable = function(e) {
        const audioBlob = e.data;
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.controls = true;
        document.getElementById("voiceStatus").innerHTML = "Recording completed! Here is your message:";
        document.getElementById("voiceStatus").appendChild(audio);
    };
    recorder.start();
}

function stopRecording() {
    recorder.stop();
    audioStream.getTracks().forEach(track => track.stop());  // Stop all tracks
}
function showNotification(message) {
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add("show");
    }, 100);

    setTimeout(() => {
        notification.classList.remove("show");
        document.body.removeChild(notification);
    }, 4000);
}

// Trigger a notification after 5 seconds
setTimeout(() => {
    showNotification("Happy New Year! 🎉 Stay blessed and enjoy the celebrations!");
}, 5000);
const toggleButton = document.querySelector('.dark-mode-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
function shareOnFacebook() {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareOnTwitter() {
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?url=${url}`, '_blank');
}

function shareOnWhatsApp() {
    const url = window.location.href;
    window.open(`https://api.whatsapp.com/send?text=${url}`, '_blank');
}
function unwrapGift() {
    // Hide the gift box and show the surprise message
    const giftBox = document.getElementById('giftBox');
    const giftMessage = document.getElementById('giftMessage');
    const surpriseMessage = document.getElementById('surpriseMessage');
    const shareButton = document.getElementById('shareBtn');
    
    giftBox.style.display = 'none';  // Hide gift box
    giftMessage.style.display = 'none';  // Hide initial message

    // Adding a smooth reveal for the surprise message
    setTimeout(function() {
        surpriseMessage.textContent = "🎉 Surprise! You've won a special New Year Gift! 🎉";
        surpriseMessage.style.display = 'block';
        shareButton.style.display = 'inline-block'; // Show share button
    }, 1000);  // Delay for smooth animation effect
}

function shareGift() {
    const url = window.location.href;
    // Here, you can link to Facebook, Twitter, WhatsApp, etc.
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=Check out my New Year gift surprise!`, '_blank');
}
setTimeout(function() {
    alert("🎉 Congratulations on your New Year Gift! 🎉");
}, 2000);  // Pop-up after a short delay
function unwrapGift() {
    // Play unwrap sound
    playSound();

    // Hide the gift box and show the surprise message
    const giftBox = document.getElementById('giftBox');
    const giftMessage = document.getElementById('giftMessage');
    const surpriseMessage = document.getElementById('surpriseMessage');
    const shareButton = document.getElementById('shareBtn');
    
    giftBox.style.display = 'none';  // Hide gift box
    giftMessage.style.display = 'none';  // Hide initial message

    // Adding a smooth reveal for the surprise message
    setTimeout(function() {
        surpriseMessage.textContent = "🎉 Surprise! You've won a special New Year Gift! 🎉";
        surpriseMessage.style.display = 'block';
        shareButton.style.display = 'inline-block'; // Show share button
    }, 1000);  // Delay for smooth animation effect
}

function playSound() {
    const sound = document.getElementById('unwrapSound');
    sound.play();
}

function shareGift() {
    const url = window.location.href;
    // Here, you can link to Facebook, Twitter, WhatsApp, etc.
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=Check out my New Year gift surprise!`, '_blank');
}
