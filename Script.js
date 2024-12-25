document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Your complaint has been submitted. Thank you for reaching out!');
        // Optionally, you can send the data to a server here
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});


