function details() {
    const name = document.getElementById("nameinput").value;
    const pass = document.getElementById("passinput").value;
    
    if (name.trim() !='Mohamed' || pass.trim() != 'mohamed') {
        alert('Please fill in both name and password fields correctly.');
        return; // Prevent form submission if fields are empty
    }
    else if (name.trim() !='Mostafa' || pass.trim() != 'mostafa') {
        alert('Please fill in both name and password fields correctly.');
        return; // Prevent form submission if fields are empty
    }
    else if (name.trim() !='Youssef' || pass.trim() != 'ashraf') {
        alert('Please fill in both name and password fields correctly.');
        return; // Prevent form submission if fields are empty
    }
    else if (name.trim() !='Youssef' || pass.trim() != 'mohamed') {
        alert('Please fill in both name and password fields correctly.');
        return; // Prevent form submission if fields are empty
    }    
    if (confirm(`Are you sure your name is ${name}?`)) {
        window.location.href = 'calc.html';
    }
}
let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        let result = eval(displayValue);
        if (result === Infinity || isNaN(result)) {
            throw 'Invalid Operation';
        }
        document.getElementById('display').value = result;
        displayValue = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}