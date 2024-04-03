function editUserData(idLocal) {
    clearPTag();
    document.getElementById("ubt").style.visibility = "visible";

    let element = document.getElementById('sbt');
    element.innerHTML = 'Update';

    for (let i = 0; i < userData.length; i++) {
        if (userData[i].id === idLocal) {
            element.setAttribute('value', userData[i].id);
            document.getElementById('userid').setAttribute('style', 'color: #315f6b; font-size: larger; font-weight: bold;');
            document.getElementById('userid').innerHTML = userData[i].id;
            document.getElementById('name').value = userData[i].name;
            document.getElementById('email').value = userData[i].email;
            if (userData[i].gender == 'Male') {
                radiobtn = document.getElementById("malegender");
                radiobtn.checked = true;
                radiobtn = document.getElementById("femalegender");
                radiobtn.checked = false;
            } else {
                radiobtn = document.getElementById("malegender");
                radiobtn.checked = false;
                radiobtn = document.getElementById("femalegender");
                radiobtn.checked = true;
            }

            document.getElementById("reading").checked = false;
            document.getElementById("travelling").checked = false;
            document.getElementById("sports").checked = false;
            for (let z = 0; z < userData[i].hobbies.length; z++) {
                for (let l = 0; l < 3; l++) {
                    switch (userData[i].hobbies[l]) {
                        case 'Reading':
                            document.getElementById("reading").checked = true;
                            break;
                        case 'Travelling':
                            document.getElementById("travelling").checked = true;
                            break;
                        case 'Sports':
                            document.getElementById("sports").checked = true;
                            break;
                    }
                }
            }
            document.getElementById('age').value = userData[i].age;
            document.getElementById('country').value = userData[i].country;
            getState();
            document.getElementById('state').value = userData[i].state;

            getCityByPara(userData[i].state);
            document.getElementById('city').value = userData[i].city;
        }
    }
}

function getCityByPara(state) {
    let e = document.getElementById("country");
    document.getElementById("city").innerHTML = "";
    let text1 = e.options[e.selectedIndex].text;
    for (let j = 0; j < place.country.length; j++) {
        if (text1 === place.country[j].countryname) {
            for (let i = 0; i < place.country[j].states.length; i++) {
                if (state === place.country[j].states[i].name) {
                    for (let k = 0; k < place.country[j].states[i].cities.length; k++) {
                        let select = document.getElementById("city");
                        let optn = place.country[j].states[i].cities[k].name;
                        let el = document.createElement("option");
                        el.textContent = optn;
                        el.value = optn;
                        select.appendChild(el);
                    }
                }
            }
        }

    }
}