window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        event.target.reset();

        // these IDs from the previous steps
        emailjs.sendForm('service_hhvtnlb', 'template_l7rw09g', this)
            .then(function() {
                console.log('SUCCESS!');
                displayToast("Success!!");
            }, function(error) {
                console.log('FAILED...', error);
                displayToast("Failed");
            });
    });
}

function displayToast(text) {
    let toast = document.querySelector('#snackbar');
    
    toast.className = "show";
    toast.innerText = text;
    setTimeout(() => {
        toast.className = toast.className.replace('show', "");
    }, 3000);
}