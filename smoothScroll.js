function smoothScroll(event) {
    event.preventDefault();
    const hash = event.target.getAttribute("href").substring(event.target.href.indexOf('#'));
    const targetId = hash.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const targetPosition = targetElement.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 2000;
        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacityProgress = progress / duration; // Calculate opacity progress

            // Calculate position progress using easing function
            const positionProgress = easeInOutCubic(progress, startPosition, distance, duration);

            // Set opacity of target element based on opacity progress
            targetElement.style.opacity = opacityProgress;

            // Scroll to target position with easing function
            window.scrollTo(0, positionProgress);

            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    } else if (hash) {
        window.location.href = event.target.href;
    }
}

// Easing function
function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
}
