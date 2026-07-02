
//  Add Money Functionalities
document.getElementById('btn-add-money')
    .addEventListener('click', function (e) {
        e.preventDefault();

        // bank access
        const bankName = document.getElementById('add-bank').value;
        // account Number access
        const accountNumber = document.getElementById('add-account').value;
        // add Amount access
        const addAmount = parseInt(document.getElementById('add-amount').value);
        // pin number access
        const addPin = parseInt(document.getElementById('add-pin').value);

        // Total blance access
        const totalBlance = parseInt(document.getElementById('total-blance').innerText);

        if (accountNumber.length !== 11) {
            alert('Enter Correct Account Number');
            return;
        }
        if (addPin !== 1234) {
            alert('Enter Correct Pin Number');
            return;
        }

        // blance addition
        const newTotalBlance = totalBlance + addAmount;

        // show total update balance
        document.getElementById('total-blance').innerText = newTotalBlance;

    })
// Cash Out Functionalities
document.getElementById('btn-cash-out').addEventListener('click', function (e) {
    e.preventDefault();

    // validation
    const agentAccount = document.getElementById('agent-account').value;
    if (agentAccount.length !== 11) {
        alert('Please Enter Correct Agent Account Number');
        return;
    }

    const cashoutPin = document.getElementById('cashout-pin').value;
    if (cashoutPin != 1234) {
        alert('Please enter correct pin number');
        return;
    }
    const cashOutAmount = parseInt(document.getElementById('cash-out-amount').value);
    // Total blance access
    const totalBlance = parseInt(document.getElementById('total-blance').innerText);

    //  calculation for cashout
    const newTotalBlance = totalBlance - cashOutAmount;

    // display new amount
    document.getElementById('total-blance').innerText = newTotalBlance;
})


// Toggle features

document.getElementById('add-money-parent-btn').addEventListener('click', function () {
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'block';
})

document.getElementById('cash-out-parent-btn').addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'block';

})