// Funktion zur Berechnung der Quadratwurzel
function calculateSquareRoot() {
    const input = document.getElementById("inputField").value;
    const resultField = document.getElementById("result");
    const partialRootButton = document.getElementById("partialRootButton");
    const convertToDecimalButton = document.getElementById("convertToDecimalButton");

    if (input === '' || isNaN(input) || parseFloat(input) < 0) {
        resultField.innerText = "Bitte geben Sie eine gültige Zahl ein.";
        partialRootButton.classList.add("hidden");
        convertToDecimalButton.classList.add("hidden");
        return;
    }

    const number = parseFloat(input);
    const sqrt = Math.sqrt(number);
    
    const { integerPart, fractionalPart } = decomposeSqrt(number);

    if (fractionalPart === 1) {
        resultField.innerText = `Ergebnis: ${integerPart}`;
    } else if (integerPart === 0) {
        resultField.innerText = `Ergebnis: √${fractionalPart}`;
    } else {
        resultField.innerText = `Ergebnis: ${integerPart}√${fractionalPart}`;
    }

    togglePartialRootButton(sqrt);
    convertToDecimalButton.classList.remove("hidden");
}

// Funktion zum Berechnen des Quadrats
function calculateSquare() {
    const input = document.getElementById("inputField").value;
    const resultField = document.getElementById("result");
    const convertToDecimalButton = document.getElementById("convertToDecimalButton");

    if (input === '' || isNaN(input)) {
        resultField.innerText = "Bitte geben Sie eine gültige Zahl ein.";
        convertToDecimalButton.classList.add("hidden");
        return;
    }

    const result = Math.pow(parseFloat(input), 2);
    resultField.innerText = `Ergebnis: ${Number.isInteger(result) ? result : result.toFixed(2)}`;
    document.getElementById("partialRootButton").classList.add("hidden");
    convertToDecimalButton.classList.add("hidden");
}

// Funktion zum Löschen des Eingabefeldes
function clearInput() {
    document.getElementById("inputField").value = '';
    document.getElementById("result").innerText = 'Ergebnis: ';
    document.getElementById("partialRootButton").classList.add("hidden");
    document.getElementById("convertToDecimalButton").classList.add("hidden");
}

// Funktion zum Hinzufügen einer Zahl zum Eingabefeld
function appendNumber(number) {
    const inputField = document.getElementById("inputField");
    if (inputField.value === '0') {
        inputField.value = number;
    } else {
        inputField.value += number;
    }
}

// Funktion zum Hinzufügen eines Kommas
function appendComma() {
    const inputField = document.getElementById("inputField");
    if (!inputField.value.includes('.')) {
        inputField.value += '.';
    }
}

// Funktion zum Berechnen der n-ten Wurzel
function calculatePartialRoot() {
    const input = document.getElementById("inputField").value;
    const resultField = document.getElementById("result");

    if (input === '' || isNaN(input)) {
        resultField.innerText = "Bitte geben Sie eine gültige Zahl ein.";
        return;
    }

    const root = parseInt(prompt("Welche Wurzel möchten Sie berechnen? (z.B. 3 für die dritte Wurzel)"), 10);

    if (isNaN(root) || root < 1) {
        resultField.innerText = "Bitte geben Sie eine gültige Wurzel ein.";
        return;
    }

    const result = Math.pow(parseFloat(input), 1 / root);
    resultField.innerText = `Teilweise Wurzel (√${root}): ${result.toFixed(2)}`;
}

// Funktion zum Decomposieren der Wurzel in eine gemischte Form
function decomposeSqrt(number) {
    let integerPart = Math.floor(Math.sqrt(number));
    let fractionalPart = number / (integerPart * integerPart);
    
    // Suche nach dem größtmöglichen Wert, der ein Quadrat ist
    for (let i = Math.floor(integerPart); i > 1; i--) {
        if (Number.isInteger(number / (i * i))) {
            integerPart = i;
            fractionalPart = number / (i * i);
            break;
        }
    }

    return { integerPart, fractionalPart };
}



// Event-Listener für den "√"-Button
document.getElementById("calculateSquareRoot").addEventListener("click", calculateSquareRoot);

// Event-Listener für den "x²"-Button
document.getElementById("calculateSquare").addEventListener("click", calculateSquare);

// Event-Listener für den "C"-Button
document.getElementById("clearButton").addEventListener("click", clearInput);

// Event-Listener für die Eingabetaste (Enter)
document.getElementById("inputField").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        if (document.getElementById("calculateSquareRoot").classList.contains("active")) {
            calculateSquareRoot();
        } else if (document.getElementById("calculateSquare").classList.contains("active")) {
            calculateSquare();
        }
    }
});
