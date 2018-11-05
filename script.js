let send = document.querySelector(".btn-success");

send.addEventListener("click", checkForm);


function addClass(element, className) {
	element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}


function checkForm(event) {

    event.preventDefault();
    let age = document.querySelector("#age");
    let name = document.querySelector("#name");
    let surname = document.querySelector("#surname");
    let email = document.querySelector("#email");
    let checkRadio = document.querySelectorAll(".form-check-input");

    let iage = document.querySelector("#iage");
    let iname = document.querySelector("#iname");
    let isurname = document.querySelector("#isurname");  
    let iemail = document.querySelector("#iemail");  


    let ageValue = age.value;
    let nameValue = name.value;
    let surnameValue = surname.value;
    let emailValue = email.value;

    var atpos = emailValue.indexOf("@");
    var dotpos = emailValue.lastIndexOf(".");

    if (ageValue === '' || !parseInt(ageValue) || isNaN(ageValue) || ageValue < 1 || ageValue > 100) {
        addClass(age, 'is-invalid');
        addClass(iage, 'invalid-feedback');
        removeClass(age, 'is-valid');
        removeClass(iage, 'valid-feedback');
        iage.innerHTML="Please provide a valid date.";
    } else {
        removeClass(age, 'is-invalid');
        removeClass(iage, 'invalid-feedback');
        addClass(age, 'is-valid');
        addClass(iage, 'valid-feedback');
        iage.innerHTML="Looks good!";
    }

    if(nameValue === '' || parseInt(nameValue)) {
        addClass(name, 'is-invalid');
        addClass(iname, 'invalid-feedback');
        removeClass(name, 'is-valid');
        removeClass(iname, 'valid-feedback');
        iname.innerHTML="Please provide a valid date.";
    } else {
        removeClass(name, 'is-invalid');
        removeClass(iname, 'invalid-feedback');
        addClass(name, 'is-valid');
        addClass(iname, 'valid-feedback');
        iname.innerHTML="Looks good!";
    }

    if(surnameValue === '' || parseInt(surnameValue)) {
        addClass(surname, 'is-invalid');
        addClass(isurname, 'invalid-feedback');
        removeClass(surname, 'is-valid');
        removeClass(isurname, 'valid-feedback');
        isurname.innerHTML="Please provide a valid date.";
    } else {
        removeClass(surname, 'is-invalid');
        removeClass(isurname, 'invalid-feedback');
        addClass(surname, 'is-valid');
        addClass(isurname, 'valid-feedback');
        isurname.innerHTML="Looks good!";
    }

    if(atpos<1 || dotpos<atpos+2 || dotpos+2>=emailValue.length) {
        addClass(email, 'is-invalid');
        addClass(iemail, 'invalid-feedback');
        removeClass(email, 'is-valid');
        removeClass(iemail, 'valid-feedback');
        iemail.innerHTML="Please provide a valid date.";
    } else {
        removeClass(email, 'is-invalid');
        removeClass(iemail, 'invalid-feedback');
        addClass(email, 'is-valid');
        addClass(iemail, 'valid-feedback');
        iemail.innerHTML="Looks good!";
    }

    if(checkRadio[0].checked || checkRadio[1].checked)
    {
    	removeClass(checkRadio[0], 'is-invalid');
        addClass(checkRadio[0], 'is-valid');
        removeClass(checkRadio[1], 'is-invalid');
        addClass(checkRadio[1], 'is-valid');
    }
    else
    {
    	addClass(checkRadio[0], 'is-invalid');
        removeClass(checkRadio[0], 'is-valid');
        addClass(checkRadio[1], 'is-invalid');
        removeClass(checkRadio[1], 'is-valid');
    }

}