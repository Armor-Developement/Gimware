let userInput = prompt("Input Gimbucks Amount:");

if (userInput !== null) {
    let targetDiv = document.querySelector('.sc-bPaAec.djsxfT');

    if (!targetDiv) {
        targetDiv = document.querySelector('.sc-dWRHGJ.dbnTXT');
    }

    if (!targetDiv) {
        targetDiv = document.querySelector('.sc-dWRHGJ.dbnTXT[style="margin-left: 5px;"]');
    }

    if (targetDiv) {
        targetDiv.innerText = userInput;
    } else {
        console.error("Element not found, please check query selector.");
    }
}
