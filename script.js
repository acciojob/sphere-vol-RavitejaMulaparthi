function volume_sphere() {
    // Get the radius value from the "Radius" input field
    const radius = parseFloat(document.getElementById('Radius').value);

    // Check if the radius is a valid number
    if (!isNaN(radius) && radius >= 0) {
        // Calculate the volume of the sphere
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Update the "Volume" field with the calculated volume
        document.getElementById('Volume').value = volume.toFixed(2); // Display with two decimal places
    } else {
        // If the radius is not a valid number or is negative, display an error message
        document.getElementById('Volume').value = 'Invalid Input';
    }
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
