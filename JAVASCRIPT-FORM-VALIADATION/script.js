
function clearErrors() {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}
function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm() {

    clearErrors();
    var name = document.getElementById('inputname').value;
    if (name.length < 5) {
        seterror('name', "  Lenght of name is to short");
        returnval = false;
    }

    var email = document.getElementById('inputEmail').value;

    if (email.length < 15) {
        seterror('email', "Email lenght too long");
        returnval = false;

    }
    var phone = document.getElementById('inputPhone4').value;
    if (phone.length != 10) {
        seterror('phone', "Phone number should be 10 digites.");
        returnval = false;

    }
    var password = document.getElementById('inputPass').value;
    if (password.length < 6) {
        console.log(seterror('password', "passwords should be atleast 6 charecter long"));

    }
    var address = document.getElementById('inputAddress').value;
    if (address.length < 20) {
        seterror('add', "address atleast 15 charecter long");
        returnval = false;
    }
    var city = document.getElementById('inputCity').value;

    returnval = false;

    return returnval;


};





