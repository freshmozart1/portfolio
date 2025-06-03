(() => {
    /**
     * @type {HTMLDivElement}
     */
    const slider = document.querySelector('.slider');
    if (!slider) return;
    const { style } = slider;

    let isDragging = false, startX = 0, currentRotation = 0, lastRotation = 0, quantity = parseInt(style.getPropertyValue('--quantity'));

    /**
     * Sets the rotation of the slider.
     * @param {number} deg The rotation in degrees
     * @returns {void}
     */
    function setRotation(deg) {
        // Much deeper perspective for a more immersive 3D effect
        style.transform = `perspective(1600px) rotateX(-2deg) rotateY(${deg}deg)`;
    }

    /**
     * Handles the rotation of the slider.
     * @param {Event} e The event object
     * @returns {void}
     */
    function handleRotation(e) {
        if (e.touches && e.touches.length !== 1) return;
        if (!isDragging) return;
        setRotation(currentRotation + ((e.touches ? e.touches[0].clientX : e.clientX) - startX) * (360 / quantity) / 240);
    }

    /**
     * Handles the start of the drag event.
     * @param {Event} e The event object
     * @returns {void}
     */
    function dragStart(e) {
        if (e.touches && e.touches.length !== 1) return;
        isDragging = true;
        startX = e.touches ? e.touches[0].clientX : e.clientX;
        currentRotation = lastRotation;
        style.cursor = 'grabbing';
        e.preventDefault();
    }

    /**
     * Handles the end of the drag event.
     * @returns {void}
     */
    function dragEnd() {
        if (!isDragging) return;
        isDragging = false;
        const match = /rotateY\((-?\d+(?:\.\d+)?)deg\)/.exec(style.transform);
        const deg = Math.round((match ? parseFloat(match[1]) : 0) / (360 / quantity)) * (360 / quantity);
        style.transition = 'transform 0.4s cubic-bezier(0.33,1,0.68,1)';
        setRotation(deg);
        slider.addEventListener('transitionend', function handler() {
            style.transition = '';
            lastRotation = deg;
            style.cursor = 'grab';
            slider.removeEventListener('transitionend', handler);
        });
    }

    ['mousedown', 'touchstart'].forEach(evt =>
        slider.addEventListener(evt, dragStart)
    );
    ['mousemove', 'touchmove'].forEach(evt =>
        window.addEventListener(evt, handleRotation)
    );
    ['mouseup', 'touchend'].forEach(evt =>
        window.addEventListener(evt, dragEnd)
    );

    setRotation(0);
})();
