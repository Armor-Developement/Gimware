// Create and style the container
const container = document.createElement('div');
container.style.fontFamily = "'Exo 2', sans-serif";
container.style.textAlign = 'center';
container.style.backgroundColor = '#ffffff';
container.style.border = '2px solid #7c4dff'; // Purple outline
container.style.borderRadius = '10px';
container.style.padding = '20px';
container.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.1)'; // Shadow effect
container.style.position = 'fixed'; // Fixed position to stay in viewport
container.style.top = '50%';
container.style.left = '50%';
container.style.transform = 'translate(-50%, -50%)';
container.style.width = '600px'; // Increased width for longer horizontal layout
container.style.height = '300px'; // Height
container.style.display = 'none'; // Initially hidden
container.style.zIndex = '1001'; // Ensure it stays in front of other content
container.style.display = 'flex'; // Use flexbox for layout
container.style.flexDirection = 'row'; // Align items horizontally

// Create and style the sidebar for buttons
const sidebar = document.createElement('div');
sidebar.style.width = '80px'; // Width of the sidebar
sidebar.style.backgroundColor = '#ffffff';
sidebar.style.borderRight = '2px solid #7c4dff'; // Purple line to separate
sidebar.style.display = 'flex';
sidebar.style.flexDirection = 'column';
sidebar.style.alignItems = 'center';
sidebar.style.justifyContent = 'space-around';
sidebar.style.padding = '10px';

// Create and style the square buttons with specific text
const sidebarButtonLabels = ['Shop', 'UI', 'Host'];
const sidebarButtons = {};
sidebarButtonLabels.forEach(label => {
    const squareButton = document.createElement('button');
    squareButton.textContent = label;
    squareButton.style.backgroundColor = '#7c4dff'; // Purple background
    squareButton.style.color = '#ffffff';
    squareButton.style.border = 'none';
    squareButton.style.borderRadius = '0'; // Square corners
    squareButton.style.width = '60px'; // Width of the button
    squareButton.style.height = '60px'; // Height of the button
    squareButton.style.margin = '5px 0'; // Vertical spacing
    squareButton.style.cursor = 'pointer';
    squareButton.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)'; // Button shadow effect
    squareButton.style.transition = 'background-color 0.3s ease';
    squareButton.onmouseover = () => squareButton.style.backgroundColor = '#5a2dff'; // Darker purple on hover
    squareButton.onmouseout = () => squareButton.style.backgroundColor = '#7c4dff'; // Reset to original color
    sidebar.appendChild(squareButton);

    if (label === 'Shop') {
        squareButton.addEventListener('click', showShopButtons);
    } else if (label === 'UI') {
        squareButton.addEventListener('click', showUiButtons);
    } else if (label === 'Host') {
        squareButton.addEventListener('click', showHostButtons); // Updated to call showHostButtons function
    }

    sidebarButtons[label] = squareButton; // Store reference to the button
});

// Create and style the main content area
const mainContent = document.createElement('div');
mainContent.style.flexGrow = '1'; // Allow it to take up remaining space
mainContent.style.display = 'flex';
mainContent.style.flexDirection = 'column';
mainContent.style.alignItems = 'center';
mainContent.style.justifyContent = 'center'; // Center buttons vertically
mainContent.style.position = 'relative';

// Create and style the original buttons inside the container with updated text
const buttonTexts = ['Uncap Gimbucks', 'Uncap Level', 'Free Shop'];
const buttons = buttonTexts.map(text => {
    const button = document.createElement('button');
    button.textContent = text;
    button.style.backgroundColor = '#7c4dff'; // Purple background
    button.style.color = '#ffffff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer';
    button.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)'; // Button shadow effect
    button.style.transition = 'background-color 0.3s ease';
    button.onmouseover = () => button.style.backgroundColor = '#5a2dff'; // Darker purple on hover
    button.onmouseout = () => button.style.backgroundColor = '#7c4dff'; // Reset to original color
    button.style.margin = '10px'; // Add margin to space buttons
    mainContent.appendChild(button);

    if (text === 'Uncap Gimbucks') {
        button.addEventListener('click', handleUncapGimbucks);
    } else if (text === 'Uncap Level') {
        button.addEventListener('click', handleUncapLevel);
    } else if (text === 'Free Shop') {
        button.addEventListener('click', handleFreeShop);
    }

    return button; // Return button to ensure it's added to the array
});

// Create and style the new buttons for UI section
const uiButtonLabels = ['Darkmode', 'Eye Destruction', 'Override Text'];
const newUiButtons = uiButtonLabels.map(label => {
    const uiButton = document.createElement('button');
    uiButton.textContent = label;
    uiButton.style.backgroundColor = '#7c4dff'; // Purple background
    uiButton.style.color = '#ffffff';
    uiButton.style.border = 'none';
    uiButton.style.borderRadius = '5px';
    uiButton.style.padding = '10px 20px';
    uiButton.style.fontSize = '16px';
    uiButton.style.cursor = 'pointer';
    uiButton.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)'; // Button shadow effect
    uiButton.style.transition = 'background-color 0.3s ease';
    uiButton.onmouseover = () => uiButton.style.backgroundColor = '#5a2dff'; // Darker purple on hover
    uiButton.onmouseout = () => uiButton.style.backgroundColor = '#7c4dff'; // Reset to original color
    uiButton.style.margin = '10px'; // Add margin to space buttons
    uiButton.style.display = 'none'; // Initially hidden
    uiButton.addEventListener('click', () => {
        if (label === 'Darkmode') handleDarkmode();
        if (label === 'Eye Destruction') handleEyeDestruction();
        if (label === 'Override Text') handleOverrideText();
    }); // Button functionality
    mainContent.appendChild(uiButton);
    return uiButton; // Return button to ensure it's added to the array
});

// Create and style the single button for Master section
const masterButton = document.createElement('button');
masterButton.textContent = 'Crash All';
masterButton.style.backgroundColor = '#7c4dff'; // Purple background
masterButton.style.color = '#ffffff';
masterButton.style.border = 'none';
masterButton.style.borderRadius = '5px';
masterButton.style.padding = '10px 20px';
masterButton.style.fontSize = '16px';
masterButton.style.cursor = 'pointer';
masterButton.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)'; // Button shadow effect
masterButton.style.transition = 'background-color 0.3s ease';
masterButton.onmouseover = () => masterButton.style.backgroundColor = '#5a2dff'; // Darker purple on hover
masterButton.onmouseout = () => masterButton.style.backgroundColor = '#7c4dff'; // Reset to original color
masterButton.style.margin = '10px'; // Add margin to space buttons
masterButton.style.display = 'none'; // Initially hidden
masterButton.addEventListener('click', handleCrashAll);
mainContent.appendChild(masterButton);

// Add elements to the container
container.appendChild(sidebar);
container.appendChild(mainContent);

// Create and style the Gimware text in the top-right corner of the popup
const gimwareBox = document.createElement('div');
gimwareBox.textContent = 'Gimware'; // Updated text
gimwareBox.style.position = 'absolute';
gimwareBox.style.top = '10px';
gimwareBox.style.right = '10px';
gimwareBox.style.fontSize = '20px';
gimwareBox.style.color = '#7c4dff'; // Purple text
gimwareBox.style.cursor = 'pointer';
gimwareBox.style.fontWeight = 'bold';

// Add event listener to the Gimware box to toggle the UI container
gimwareBox.addEventListener('click', () => {
    container.style.display = container.style.display === 'none' ? 'flex' : 'none';
});

// Add event listeners to the sidebar buttons
function showShopButtons() {
    buttons.forEach(button => button.style.display = 'flex');
    newUiButtons.forEach(button => button.style.display = 'none');
    masterButton.style.display = 'none';
}

function showUiButtons() {
    buttons.forEach(button => button.style.display = 'none');
    newUiButtons.forEach(button => button.style.display = 'flex');
    masterButton.style.display = 'none';
}

function showHostButtons() {
    buttons.forEach(button => button.style.display = 'none'); // Hide shop buttons
    newUiButtons.forEach(button => button.style.display = 'none'); // Hide UI buttons
    masterButton.style.display = 'flex'; // Show master button
}

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

function eyeDestruction() {
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        element.style.backgroundColor = 'white';
        element.style.color = 'white';
        element.style.borderColor = 'white';
    });
    document.body.style.backgroundColor = 'white';
}

function updateGimbucksAmount() {
    let userInput = prompt("Input Gimbucks Amount:");

    if (userInput !== null) {
        let targetDiv = document.querySelector('.sc-dkKxlM bBtDiy');

        if (!targetDiv) {
            targetDiv = document.querySelector('.sc-dkKxlM bBtDiy');
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
}

function updateLevel() {
    // Prompt the user for a new level number
    var newLevel = prompt("Input Level");

    // Check if the user provided an input
    if (newLevel !== null && newLevel.trim() !== "") {
        // Find the div element with the specified class
        var levelDiv = document.querySelector('.sc-idXgbr.dPokMS');

        // Check if the div was found
        if (levelDiv) {
            // Update the div content with the new level
            levelDiv.textContent = 'Level ' + newLevel;
        } else {
            console.error("Div element not found");
        }
    } else {
        console.error("Invalid input");
    }
}

// Define functions for button actions
function handleUncapGimbucks() {
    updateGimbucksAmount();
}

function handleUncapLevel() {
    updateLevel();
}

function handleFreeShop() {
    alert("Not working rn :(");
}

function handleDarkmode() {
    invertColors();
}

function handleEyeDestruction() {
    eyeDestruction();
}

function handleOverrideText() {
    alert("Not working rn :(");
}

function handleCrashAll() {
    location.reload();
}

// Add the container to the document body
document.body.appendChild(container);
document.body.appendChild(gimwareBox); // Add Gimware box to the body
