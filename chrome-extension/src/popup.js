// chrome-extension/src/popup.js
document.getElementById('courseForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const language = document.getElementById('language').value;

    // Send data to backend API
    try {
        const response = await fetch('http://localhost:5000/api/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Include authentication headers if necessary
            },
            body: JSON.stringify({ title, description, language, modules: [] })
        });
        const data = await response.json();
        console.log('Course Created:', data);
        alert('Course Created Successfully!');
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to create course.');
    }
});
