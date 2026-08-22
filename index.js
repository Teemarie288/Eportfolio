function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('modal__overlay--loading')
    const success = document.querySelector('modal__overlay--success')
    
    emailjs
     .sendForm(
        'service_h3f8ev7',
        'template_fbv3be8',
        event.target,
        'hpe6RM54_LcXh0gay'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly @Tiffanys228@gmail.com" 
        )
    })
}


function toggleModal() {}





 



  