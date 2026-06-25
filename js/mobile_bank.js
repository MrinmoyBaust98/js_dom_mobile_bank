
// login button functionality
document.getElementById('btn-login')
    .addEventListener('click', function (e) {
        e.preventDefault()
        // user Fixed Mobile number and pin
        const mobile = 1234567890;
        const pin = 1234;

        // Input box theke user er deya mobile and pin collect
        const phnNumber = document.getElementById('phn-number').value;
        const convertPhnNumber = parseInt(phnNumber);

        const pinNumber = document.getElementById('pin-number').value;
        const convertPinNumber = parseInt(pinNumber);

        // User er deya value ar fixed value cheek and next page ridriect
        if (mobile === convertPhnNumber && pin === convertPinNumber) {
            window.location.href = "./home.html";
        }
        else {
            alert('Please Enter Right Credintial');
        }
    })