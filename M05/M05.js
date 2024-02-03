var operator = 'multiplication'; // Type of calculation
var i = 1;                       // Set counter to 1
var table;                       // Number to multiply by

// Prompt user for type of table.
while (table > 10 || table < 1) {
    table = prompt("Enter a number: ");
}
// Conditional to check if user wants to multiply.
if (operator === 'multiplication') {
  
    // Set message to inform of which table is in use.
    var msg = '<h2>Multiplication Table</h2>'
  
    // Do multiplication and write to msg.
    while (i < 11) {
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
        i++;
    }
}

// Write msg to page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
