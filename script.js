document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed.");
    
    let ReScroll = document.createElement('button');
    
    let img = document.createElement('img');
    img.src = 'Arrow.png'; 
    img.alt = 'Scroll to top';
    img.style.width = '30px';
    img.style.height = '30px';
    
    ReScroll.appendChild(img);
    
    ReScroll.id = 'scrollbutton';
    
    let buttonContainer = document.getElementById('buttonContainer');
    
    if (buttonContainer) {
        buttonContainer.appendChild(ReScroll);
        console.log("Button appended successfully.");
    } else {
        console.error("buttonContainer not found!");
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > 850) {
            ReScroll.style.display = 'block';
        } else {
            ReScroll.style.display = 'none';
        }
    });

    ReScroll.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        console.log("Scrolling to top...");
    });

    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        formResponse.innerText = 'Sending...';
        formResponse.style.display = 'block';

        const formData = new FormData(form);
        formData.append('secret', '%.lb&?>=<Gg1R-%3m?:u?z=.Q|9+H9wF|)),cH5xDDodmF66iU69^1zw--Gy&]F');

        fetch(form.action, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.text())
        .then(result => {

            console.log(result);
            console.log(formData, formResponse);
            form.reset();
            formResponse.innerText = 'Thank you for your message. I will get back to you';
            formResponse.style.display = 'block';

        })
        .catch(error => {
            console.error('Error!', error.message);
        });
    });
});