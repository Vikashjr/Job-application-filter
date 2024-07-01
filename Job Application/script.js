document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;

    // Validation
    if (education.toLowerCase() !== 'b.e') {
        alert('Educational qualification must be B.E.');
        return;
    }

    if (experience < 2) {
        alert('Experience must be a minimum of 2 years.');
        return;
    }

    alert('Form submitted successfully!');
    // You can add form submission code here (e.g., send data to the server)
});
