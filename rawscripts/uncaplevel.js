let userInput = prompt("Input Level:");

if (userInput !== null) {
    let targetDiv = document.querySelector('.sc-biLNch.jcrWHW');

    if (targetDiv) {
        targetDiv.innerHTML = `Level ${userInput} <br><small style="font-size: 10px;">uncapped with Midnight Injector</small>`;
    } else {
        console.error("Element not found, please check query selector");
    }
}
