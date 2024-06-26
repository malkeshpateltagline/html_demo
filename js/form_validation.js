function validateData() {

    let valiName, valiEmail, valiGender, valiHobbies, valiAge, valiCountry = true;

    let locName = document.forms["userForm"]["name"].value;

    let regex = /^[a-zA-Z\s]+$/;
    if (regex.test(locName.trim()) === false || locName.trim() == "") {
        document.getElementById("pname").innerHTML = "Please Enter Valid Name"
        valiName = false;
    }

    let locEmail = document.forms["userForm"]["email"].value;

    regex = /^\S+@\S+\.\S+$/;
    if (regex.test(locEmail.trim()) === false || locEmail.trim() == "") {
        document.getElementById("pemail").innerHTML = "Please Enter Valid Email Address"
        valiEmail = false;
    }

    let localGender = document.getElementsByName('gender')

    if (!(localGender[0].checked || localGender[1].checked)) {

        document.getElementById("pgender").innerHTML = "Please Select Gender"
        valiGender = false;
    }

    let checkHobbies = document.getElementsByName('hobbies');

    if (!(checkHobbies[0].checked || checkHobbies[1].checked || checkHobbies[2].checked)) {

        document.getElementById("phobbies").innerHTML = "Please Select Hobbies"
        valiHobbies = false;
    }

    let locAge = parseInt(document.forms["userForm"]["age"].value);

    if (locAge <= 0 || locAge > 100 || isNaN(locAge)) {
        document.getElementById("page").innerHTML = "Please Enter Valid Age"
        valiAge = false;
    }

    if (document.forms["userForm"]["country"] == "" || document.forms["userForm"]["country"].value == "Select Country") {
        document.getElementById("pcountry").innerHTML = "Please Select Country"
        valiCountry = false;
    }
    if (valiName == false || valiEmail == false || valiGender == false || valiHobbies == false || valiAge == false || valiCountry == false) {
        validationFlag = false;
        return;
    }
    clearPTag();
    validationFlag = true;
}

function clearPTag() {
    document.getElementById("pname").innerHTML = ""
    document.getElementById("pemail").innerHTML = ""
    document.getElementById("pgender").innerHTML = ""
    document.getElementById("phobbies").innerHTML = ""
    document.getElementById("page").innerHTML = ""
    document.getElementById("pcountry").innerHTML = ""
}