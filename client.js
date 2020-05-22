$(document).ready(readyNow);

// set up ready now function
function readyNow() {
    // when the submit button is clicked, tun the addInfo function
    $('#submitButton').on('click', addInfo);
}


// start addInfo function 
function addInfo() {
    let firstName = $('#firstName').val()
    $('.name').append(firstName);
    $('#firstName').val('');

    let lastName = $('#lastName').val();
    $('.lName').append(lastName);
    $('#lastName').val('');

    let number = $('#idNumber').val();
    $('.number').append(number);
    $('#idNumber').val('');

    let title = $('#title').val();
    $('.theTitle').append(title);
    $('#title').val('');

    let salary = $('#annualSalary').val();
    $('.salary').append(salary);
    $('#annualSalary').val('');
    $('#totalMonthly').append(salary);

    // function addCost() {
    //     const total = [];
    //     let amount = $('#annualSalary').val();
    //     total.push(amount);
    //     $('#totalMonthly').append(amount)
    // }

    // function addItUp() {
    //     for (let number of total) {
    //         amount + amount[number];
    //     }
    // }

}