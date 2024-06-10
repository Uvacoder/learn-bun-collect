const btn = document.querySelector(".btn");
const speed = document.querySelector(".speed");
const circle = document.querySelector(".circle");
let animate = false;
let position = 0;
let direction = 1;
let animationFrameId = null;
const moveCircle = () => {
    const speedValue = parseInt(speed.value, 10) || 5;
    position += direction * speedValue;
    circle.style.transform = `translateX(${position}px)`;
    if (position > window.innerWidth - circle.offsetWidth || position < 0) {
        direction *= -1;
    }
    animationFrameId = requestAnimationFrame(moveCircle);
};
btn.addEventListener('click', () => {
    if (!animate) {
        animate = true;
        animationFrameId = requestAnimationFrame(moveCircle);
    }
    else {
        if (animationFrameId !== null) {
            cancelAnimationFrame(animationFrameId);
        }
        animate = false;
    }
});
export {};
