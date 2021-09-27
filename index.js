window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // these IDs from the previous steps
        emailjs.sendForm('service_hhvtnlb', 'template_l7rw09g', this)
            .then(function() {
                console.log('SUCCESS!');
                displayToast("Success!!");
                event.target.reset();
            }, function(error) {
                console.log('FAILED...', error);
                displayToast("Failed");
            });
    });

    document.getElementById('email').addEventListener('click', (event) => {
        const text = "Email id copied to clipboard";
        const email = "santhanamsriram07@gmail.com"
        navigator.clipboard.writeText(email);
        displayToast(text);
    })
}

function displayToast(text) {
    let toast = document.querySelector('#snackbar');
    
    toast.innerText = text;
    toast.className = "show";
    setTimeout(() => {
        toast.className = toast.className.replace('show', '');
    }, 3000);
}