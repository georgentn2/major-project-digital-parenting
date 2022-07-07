const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelector('.core-steps');

        if (entry.isIntersecting) {
            square.classList.add('xyz-in');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('xyz-in');
    });
});

observer.observe(document.querySelector('.core-steps-wrapper'));


const intro = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelector('.question');

        if (entry.isIntersecting) {
            square.classList.add('xyz-in');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('xyz-in');
    });
});

intro.observe(document.querySelector('.intro-section'));



// Flip Card