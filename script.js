document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed.");
    
    let ReScroll = document.createElement('button');
    
    // Create an image element
    let img = document.createElement('img');
    img.src = 'Arrow.png'; 
    img.alt = 'Scroll to top';
    img.style.width = '30px';
    img.style.height = '30px';
    
    // Append the image to the button
    ReScroll.appendChild(img);
    
    // Set an ID so it can be styled
    ReScroll.id = 'scrollbutton';
    
    // Find the container and append the button there
    let buttonContainer = document.getElementById('buttonContainer');
    
    
    if (buttonContainer) {
        buttonContainer.appendChild(ReScroll);  // Append the button to the container
        console.log("Button appended successfully.");
    } else {
        console.error("buttonContainer not found!");
    }

    // Add event listener to show the button after scrolling
    window.addEventListener('scroll', function() {
        if (window.scrollY > 850) {
            ReScroll.style.display = 'block';  // Show the button
        } else {
            ReScroll.style.display = 'none';  // Hide the button
        }
    });

    // Add event listener to scroll to top when the button is clicked
    ReScroll.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        console.log("Scrolling to top...");
    });
});
