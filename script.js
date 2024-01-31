document.addEventListener('DOMContentLoaded', () => {
    const selectElements = document.querySelectorAll('select');
    const checkboxElements = document.querySelectorAll('input[type=checkbox]');
    const endOfOptions = document.getElementById('endOfOptions');
    const totalCost = document.getElementById('totalCost');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
    
        // Calculate the distance from the bottom of the document
        const distanceFromBottom = documentHeight - (scrollPosition + windowHeight);
    
        // Define a threshold (e.g., 150 pixels from the bottom of the document)
        const threshold = 150;
    
        if (distanceFromBottom <= threshold) {
            // Close to the bottom of the document, make totalCost static
            totalCost.style.position = 'static';
        } else {
            // Not near the bottom, make totalCost fixed
            totalCost.style.position = 'fixed';
            totalCost.style.bottom = '0';
        }
    });
    

    selectElements.forEach(select => {
        select.addEventListener('change', updateCostAndImage);
    });

    checkboxElements.forEach(checkbox => {
        checkbox.addEventListener('change', updateCostAndImage);
    });

    // Initial call to set the default total cost and image
 

function updateCostAndImage() {
    let totalCost = 0;
    
    // Update total cost for select dropdowns
    const selectOptions = document.querySelectorAll('select');
    selectOptions.forEach(select => {
        totalCost += parseInt(select.value);
    });

    // Update total cost for checkbox groups
    const checkboxOptions = document.querySelectorAll('input[type=checkbox]:checked');
    checkboxOptions.forEach(checkbox => {
        totalCost += parseInt(checkbox.value);
    });

    // Format and display the total cost
    document.getElementById('price').innerText = `R ${totalCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

    // Update image (example logic, adjust as needed)
    // For each option, you can set a corresponding image
    let imageUrl = 'images/default-image.jpg';
    // Update the image source
    document.getElementById('displayImage').src = imageUrl;
}







updateCostAndImage();

});
