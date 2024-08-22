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
const sidebarButtonLabels = ['Shop', 'UI', 'Master'];
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
});

// Create and style the main content area
const mainContent = document.createElement('div');
mainContent.style.flexGrow = '1'; // Allow it to take up remaining space
mainContent.style.display = 'flex';
mainContent.style.flexDirection = 'column';
mainContent.style.alignItems = 'center';
mainContent.style.justifyContent = 'center'; // Center buttons vertically
mainContent.style.position = 'relative';

// Create and style the original buttons inside the container
const buttonTexts = ['Click Me', 'Another Button', 'Yet Another Button'];
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
    button.addEventListener('click', () => alert(`${text} Clicked!`)); // Button functionality
    mainContent.appendChild(button);
    return button; // Return button to ensure it's added to the array
});

// Create and style the new buttons for UI section
const uiButtonLabels = ['New Button 1', 'New Button 2', 'New Button 3'];
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
    uiButton.addEventListener('click', () => alert(`${label} Clicked!`)); // Button functionality
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
masterButton.addEventListener('click', () => {
    location.reload(); // Reload the page
}); // Button functionality
mainContent.appendChild(masterButton);

// Add elements to the container
container.appendChild(sidebar);
container.appendChild(mainContent);

// Create and style the Gimware text in the top-right corner of the popup
const gimwareBox = document.createElement('div');
gimwareBox.textContent = 'Open'; // Updated text
gimwareBox.style.position = 'fixed';
gimwareBox.style.top = '10px';
gimwareBox.style.left = '10px';
gimwareBox.style.backgroundColor = '#ffffff';
gimwareBox.style.border = '2px solid #7c4dff'; // Purple border
gimwareBox.style.borderRadius = '20px';
gimwareBox.style.padding = '5px 10px';
gimwareBox.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)'; // Shadow effect
gimwareBox.style.color = '#7c4dff'; // Purple text color
gimwareBox.style.fontSize = '16px'; // Smaller font size
gimwareBox.style.fontWeight = '700';
gimwareBox.style.cursor = 'pointer'; // Make it clickable
gimwareBox.style.zIndex = '1000'; // Ensure it stays above other content

// Add event listener to the Gimware box to toggle the UI container
gimwareBox.addEventListener('click', () => {
    container.style.display = container.style.display === 'none' ? 'flex' : 'none';
});

// Add event listeners to the sidebar buttons
const shopButton = sidebar.querySelector('button:nth-child(1)');
const uiButton = sidebar.querySelector('button:nth-child(2)');
const masterButtonSidebar = sidebar.querySelector('button:nth-child(3)');

shopButton.addEventListener('click', () => {
    buttons.forEach(button => button.style.display = 'flex');
    newUiButtons.forEach(button => button.style.display = 'none');
    masterButton.style.display = 'none';
});

uiButton.addEventListener('click', () => {
    buttons.forEach(button => button.style.display = 'none');
    newUiButtons.forEach(button => button.style.display = 'flex');
    masterButton.style.display = 'none';
});

masterButtonSidebar.addEventListener('click', () => {
    buttons.forEach(button => button.style.display = 'none');
    newUiButtons.forEach(button => button.style.display = 'none');
    masterButton.style.display = 'flex';
});

// Add elements to the body
document.body.appendChild(gimwareBox);
document.body.appendChild(container);

// Load the Exo 2 font
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);
