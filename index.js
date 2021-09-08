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
}

function displayToast(text) {
    let toast = document.querySelector('#snackbar');
    
    toast.innerText = text;
    toast.className = "show";
    setTimeout(() => {
        toast.className = toast.className.replace('show', '');
    }, 3000);
}