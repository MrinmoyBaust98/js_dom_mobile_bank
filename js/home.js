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