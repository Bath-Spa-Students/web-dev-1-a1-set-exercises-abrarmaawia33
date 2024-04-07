// This function is executed when the window has finished loading
window.onload = () => {
    const Petrol_PriceInput = document.querySelector("#Petrol_Price");
    const litersInput = document.querySelector("#liters");

// Add event listeners to these input fields to listen for input changes
    Petrol_PriceInput.addEventListener("input", calculate);
    litersInput.addEventListener("input", calculate);
}

// This function calculates the total amount based on the petrol price and liters entered
function calculateTotalAmount() {
    const petrolPrice = document.querySelector("#Petrol_Price").value;
    const liters = document.querySelector("#liters").value;

    // Checking if either of the input fields is empty
    if (!petrolPrice || !liters) {
        document.querySelector("#totalAmount").innerText = "Please enter both petrol price and liters.";
        return; // Exit the function early
    }
// If both input fields have valid values, calculate the total amount
    const totalAmount = parseFloat(petrolPrice) * parseFloat(liters);
    
     // Update the content of the totalAmount element with the calculated result
    document.querySelector("#totalAmount").innerText = totalAmount.toFixed(2);
}

