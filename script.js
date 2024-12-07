// Hardcoded conversion rates
const conversionRates = {
    "USD_INR": 74.5,
    "EUR_INR": 90.5,
    "USD_EUR": 0.85,
    "INR_USD": 1 / 74.5,
    "INR_EUR": 1 / 90.5,
    "EUR_USD": 1 / 0.85,
};

// Function to handle the currency conversion
function convertCurrency() {
    const sourceCurrency = document.getElementById("sourceCurrency").value;
    const targetCurrency = document.getElementById("targetCurrency").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const conversionKey = `${sourceCurrency}_${targetCurrency}`;
    const conversionRate = conversionRates[conversionKey];

    if (conversionRate) {
        const result = amount * conversionRate;
        document.getElementById("result").textContent = `${amount} ${sourceCurrency} = ${result.toFixed(2)} ${targetCurrency}`;
    } else {
        document.getElementById("result").textContent = "Conversion rate not available.";
    }
}

// Function to clear input and result
function clearFields() {
    document.getElementById("sourceCurrency").value = "USD";
    document.getElementById("targetCurrency").value = "INR";
    document.getElementById("amount").value = "";
    document.getElementById("result").textContent = "";
}

// Event Listeners
document.getElementById("convertBtn").addEventListener("click", convertCurrency);
document.getElementById("clearBtn").addEventListener("click", clearFields);
