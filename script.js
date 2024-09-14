// Aktueller Modus (Wurzel oder Quadrat)
let mode = 'squareRoot';

// Funktion zur Berechnung der Quadratwurzel
function calculateSquareRoot() {
    const input = document.getElementById("inputField").value;
    const resultField = document.getElementById("result");

    if (input === '' || isNaN(input) || parseFloat(input) < 0) {
        resultField.innerText = "Bitte geben Sie eine gültige Zahl ein.";
        return;
    }

    const result = Math.sqrt(parseFloat(input));
    resultField.innerText = `Ergebnis: ${Number.isInteger(result) ? result : result.toFixed(2)}`;
}

// Funktion zum Berechnen des Quadrats
function calculateSquare() {
    const input = document.getElementById("inputField").value;
    const resultField = document.getElementById("result");

    if (input === '' || isNaN(input)) {
        resultField.innerText = "Bitte geben Sie eine gültige Zahl ein.";
        return;
    }

    const result = Math.pow(parseFloat(input), 2);
    resultField.innerText = `Ergebnis: ${Number.isInteger(result) ? result : result.toFixed(2)}`;
}

// Funktion zum Löschen des Eingabefeldes
function clearInput() {
    document.getElementById("inputField").value = '';
    document.getElementById("result").innerText = 'Ergebnis: ';
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
        if (mode === 'squareRoot') {
            calculateSquareRoot();
        } else if (mode === 'square') {
            calculateSquare();
        }
    }
});
