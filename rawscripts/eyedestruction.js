function eyeDestruction() {
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        element.style.backgroundColor = 'white';
        element.style.color = 'white';
        element.style.borderColor = 'white';
    });
    document.body.style.backgroundColor = 'white';
}

eyeDestruction();
