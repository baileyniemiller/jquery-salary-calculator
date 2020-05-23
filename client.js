$(document).ready(readyNow);

let total = 0;

// set up ready now function
function readyNow() {
    // when the submit button is clicked, run the addInfo function
    $('#submitButton').on('click', addInfo);
}

// start addInfo function 
function addInfo() {
    // add a new row
    let newRow = $('<tr></tr>');
    $('tbody').append(newRow);
    // declare firstName as the value of the first name input
    let firstName = $('#firstName').val();
    // take the value and display it in the table
    $(newRow).append(`<td> ${firstName} </td>`);
    // empty the input
    $('#firstName').val('');

    // declare lastName as the value of the last name input
    let lastName = $('#lastName').val();
    // take the value and display it in the table
    $(newRow).append(`<td> ${lastName} </td>`);
    // empty
    $('#lastName').val('');

    // declare number as the value of the ID number input
    let number = $('#idNumber').val();
    // take the value and display it in the table
    $(newRow).append(`<td> ${number} </td>`);
    // empty
    $('#idNumber').val('');

    // declare title as the value of the title input
    let title = $('#title').val();
    // take the value and display it in the table
    $(newRow).append(`<td> ${title} </td>`);
    // empty
    $('#title').val('');

    // declare salary as the value of the annual salary input
    let salary = $('#annualSalary').val();
    // take the value and display it in the table
    $(newRow).append(`<td> ${salary} </td>`);
    // display it in the monthly total
 
    newTotal = Number(salary) / 12;
    total += newTotal;
    $('#totalMonthly').empty();
    $('#totalMonthly').append(parseInt(total));
    $('#annualSalary').val('');
    if (total > 20000) {
        $('h3').css('background-color', 'red');
    }
    // push the value into the salaryArray
    // salaryArray.push($(salary));

    // declare button
    let deleteButton = $(`<button class="delete">Delete</button>`);
    $(newRow).append(deleteButton);

    $('.delete').on('click', function (event) {
        const element = event.target;
        $(element).parent().remove();
    });
}










// thinking it through
// each time someone types something new and clicks the button
// we want those input values to be added to the DOM
// and create a new row each time

// we also want the value from salary to be stored somewhere
// so all the values can be added up for the total monthly