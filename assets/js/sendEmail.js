function sendEmail(event) {
    event.preventDefault();

    emailjs.send('service_bnplt08', 'rosie-ci', {
        'from_name': this.fullname.value,
        'from_email': this.emailaddress.value,
        'project_request': this.projectsummary.value
    })
    .then(
        function(response) {
            console.log('SUCCESS', response);
        },
        function(error) {
            console.log('FAILED', error);
        }
    );

    this.reset();

    return false;
}

document.getElementById('contactForm').addEventListener('submit', sendEmail)