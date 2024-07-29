const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
let currentActive = 0;

nextButton.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length - 1) {
        currentActive = 0;
    }
    update();
});

prevButton.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 0) {
        currentActive = circles.length - 1;
    }
    update();
});

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('completed');
            circle.classList.remove('active');
        } else if (idx === currentActive) {
            circle.classList.add('active');
            circle.classList.remove('completed');
        } else {
            circle.classList.remove('active');
            circle.classList.remove('completed');
        }
    });

    if (currentActive === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    if (currentActive === circles.length - 1) {
        nextButton.textContent = 'Restart';
    } else {
        nextButton.textContent = 'Next';
    }
}
