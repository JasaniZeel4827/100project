function convertToLower() {
    const inputText = document.getElementById('textInput').value;
    const lowerText = inputText.toLowerCase();
    document.getElementById('output').textContent = lowerText;
    return lowerText; // Add return statement
}

convertToLower();