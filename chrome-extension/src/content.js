// chrome-extension/src/content.js
// Example: Inject a button into the page to create a course
const button = document.createElement('button');
button.innerText = 'Create Course with EduCraft';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.padding = '10px 20px';
button.style.zIndex = 1000;
document.body.appendChild(button);

button.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'openPopup' });
});
