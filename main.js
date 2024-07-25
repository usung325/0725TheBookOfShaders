document.addEventListener("DOMContentLoaded", () => {
    const letters = 'qwertyuioplkjhgfdsazxcvbnm';
    let animationsCompleted = 0;
    const totalAnimations = 1; // t0 to t7

    function startShuffling(textClass, iter, tick, delay) {
        setTimeout(() => {
            animationComplete();
            let iteration = 0;
            const textBlock = document.querySelector('.' + textClass);
            if (!textBlock) {
                animationComplete();
                return;
            }
            const originalValue = textBlock.innerText;

            const interval = setInterval(() => {
                textBlock.innerText = originalValue
                    .split("")
                    .map((letters, index) => {
                        if (index < iteration) {
                            return originalValue[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                if (iteration >= originalValue.length) {
                    clearInterval(interval);
                    textBlock.innerText = originalValue;
                }

                iteration += tick;
            }, iter);
        }, delay);
    }

    function animationComplete() {
        animationsCompleted++;
        if (animationsCompleted >= totalAnimations) {
            document.body.classList.add('loaded');
            document.getElementById('loading-overlay').style.display = 'none';
        }
    }

    // Start shuffling for each text element
    startShuffling('t0', 0, 1 / 2, 0);
    // startShuffling('t1', 15, 1 / 2, 0);
    // startShuffling('t2', 15, 1 / 2, 0);
    // startShuffling('t3', 15, 1 / 2, 0);
    // startShuffling('t4', 15, 1 / 2, 0);
    // startShuffling('t5', 15, 1 / 2, 0);
    // startShuffling('t6', 15, 1 / 2, 0);
    // startShuffling('t7', 15, 1 / 2, 0);
});