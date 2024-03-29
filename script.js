var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

const validateName = () => {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    // nameError.style.color = 'green';
    return true;
}

const validatePhone = () => {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0){
        phoneError.innerHTML = "Phone number is required";
        return false;
    }

    if (phone.length !== 10){
        phoneError.innerHTML = "Number should be 10 digits"
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Enter a 10 Number";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

const validateEmail = () => {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email Invalid";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true
}

const validateMessage = () => {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length

    if (left > 0){
        messageError.innerHTML = left + " more characters required";
        return true;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true
}

const validateForm = () => {
    if (validateName() || validateEmail() || validatePhone() || validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = "Pease fix error(s) to submit form";
        
        setTimeout(()=> {
            submitError.style.display = 'none';
        }, 3000);
        return false
    }
}