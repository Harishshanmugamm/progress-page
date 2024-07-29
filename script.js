const prevs = document.getElementById('prev');
const nextb = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
let c= 0;

nextb.addEventListener('click', () => {
    c+=1;
    if (c > circles.length - 1) {
        c = 0;
    }
    update();
});

prevs.addEventListener('click', () => {
    c--;
    if (c < 0) {
        c = circles.length - 1;
    }
    update();
});

function update() {
    circles.forEach((circle, i) => {
        if (i < c) {
            circle.classList.add('completed');
            circle.classList.remove('active');
        } else if (i === c) {
            circle.classList.add('active');
            circle.classList.remove('completed');
        } else {
            circle.classList.remove('active');
            circle.classList.remove('completed');
        }
    });

    if (c === 0) {
        prevs.disabled = true;
    } else {
        prevs.disabled = false;
    }

    if (c === circles.length - 1) {
        nextb.textContent = 'Restart';
    } else {
        nextb.textContent = 'Next';
    }
}
