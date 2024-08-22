function invertColors() {
    const elements = document.querySelectorAll('*');

    elements.forEach((el) => {
        const computedStyle = getComputedStyle(el);

        const bgColor = computedStyle.backgroundColor;
        if (bgColor === 'rgb(255, 255, 255)') {
            el.style.backgroundColor = 'rgb(50, 50, 50)';
        } else if (bgColor === 'rgb(0, 0, 0)' || bgColor.startsWith('rgb(128')) {
            el.style.backgroundColor = 'rgb(255, 255, 255)';
        }

        const textColor = computedStyle.color;
        if (textColor === 'rgb(255, 255, 255)') {
            el.style.color = 'rgb(50, 50, 50)';
        } else if (textColor === 'rgb(0, 0, 0)' || textColor.startsWith('rgb(128')) {
            el.style.color = 'rgb(255, 255, 255)';
        }

        el.style.setProperty('color', el.style.color, 'important');
        el.style.setProperty('background-color', el.style.backgroundColor, 'important');
    });
}

invertColors();
