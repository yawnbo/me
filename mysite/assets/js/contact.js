// Init method on "document" that waits for DOM to parse and load before executing funtion code.
document.addEventListener('DOMContentLoaded', function () {
    
    // links to form to myForm div and sets to const so nothing can change it.
    const form = document.getElementById('myForm');

    // links messageDiv to display message if user doesnt fill out fields >:(
    const messageDiv = document.getElementById('messageDiv');

    // Listens for event flag when submit is clicked.
    form.addEventListener('submit', function (event) {

        // Gets 0 index of all strings to check if empty.
        const name = document.getElementsByName('name')[0].value;
        const email = document.getElementsByName('email')[0].value;
        const message = document.getElementsByName('message')[0].value;
        
        // Conditional to print message to fill out all fields and cancel submission if any are empty.
        // if conditional not met the submission goes through and html handles redirect with get method. 
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            event.preventDefault();
            messageDiv.textContent = 'Please fill out all fields.';
        }
    });
});