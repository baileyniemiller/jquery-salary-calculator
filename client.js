$(document).ready(readyNow);

// set up ready now function
function readyNow() {
    // when the submit button is clicked, run the addInfo function
    $('#submitButton').on('click', addInfo);
}

// let salaryArray = [];

// start addInfo function 
function addInfo() {
    // declare firstName as the value of the first name input
    let firstName = $('#firstName').val()
    // take the value and display it in the table
    $('.name').append(firstName);
    // empty the input
    $('#firstName').val('');

    // declare lastName as the value of the last name input
    let lastName = $('#lastName').val();
    // take the value and display it in the table
    $('.lName').append(lastName);
    // empty
    $('#lastName').val('');

    // declare number as the value of the ID number input
    let number = $('#idNumber').val();
    // take the value and display it in the table
    $('.number').append(number);
    // empty
    $('#idNumber').val('');

    // declare title as the value of the title input
    let title = $('#title').val();
    // take the value and display it in the table
    $('.theTitle').append(title);
    // empty
    $('#title').val('');

    // declare salary as the value of the annual salary input
    let salary = $('#annualSalary').val();
    // take the value and display it in the table
    $('.salary').append(Number(salary));
    // display it in the monthly total
    $('#totalMonthly').append(salary);
    // empty
    $('#annualSalary').val('');
    // push the value into the salaryArray
    salaryArray.push($(salary));
}

// function calculateTotal() {
//     let total = 0;
//     // loop through salary array
//     for (let i=0; i<salaryArray.length; i++) {
//         total += Number(salaryArray[i]);
//     } //end for
//     console.log('total: ', total);
//     // add up total salaries of the array
//     // display in total monthly
// }