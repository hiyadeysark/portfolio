//listen for form submit

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    //save message
    saveMessage(name, email, subject, message);

    //clear and show alert
    contactForm.reset();
    window.alert('Your message has been sent');

});


//function to save the message
function saveMessage(name, email, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    });
}