let dateTime = new Date().toLocaleString();

let userData = [{
    id: Math.random().toString(8).slice(2, 8),
    name: 'Suman Mehta',
    email: 'suman@gmail.com',
    gender: 'Female',
    hobbies: ['Reading'],
    age: '26',
    country: 'India',
    state: 'Maharashtra',
    city: 'Mumbai',
    time: dateTime
}, {
    id: Math.random().toString(8).slice(2, 8),
    name: 'Kamal Mishra',

    email: 'kamal@gmail.com',
    gender: 'Male',
    hobbies: ['Travelling'],
    age: '35',
    country: 'Pakistan',
    state: 'Balochistan',
    city: 'Rawalpindi',
    time: dateTime
},
{
    id: Math.random().toString(8).slice(2, 8),
    name: 'Sumit Jani',
    email: 'sumitjani@gmail.com',
    gender: 'Male',
    hobbies: ['Sports'],
    age: '28',
    country: 'India',
    state: 'Gujarat',
    city: 'Surat',
    time: dateTime
},
];
addDataToTable();

let validationFlag = false;

function onSubmitData() {
    clearPTag();
    validateData();

    if (validationFlag == true) {
        let tip = document.getElementById("sbt");
        if (tip.textContent == 'Update') {

            updateUserData();
        } else {

            //get gender
            let localGender = document.getElementsByName('gender')

            for (i = 0; i < localGender.length; i++) {
                if (localGender[i].checked)
                    localGender = localGender[i].value;
            }
            //get hobbies
            let checkHobbies = document.getElementsByName('hobbies');


            let result = [];
            for (let i = 0; i < checkHobbies.length; i++) {
                if (checkHobbies[i].checked) {
                    result.push(checkHobbies[i].value);
                }
            }

            let localUserData = {
                id: Math.random().toString(8).slice(2, 8),
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                gender: localGender,
                hobbies: result,
                age: document.getElementById('age').value,
                country: document.getElementById('country').value,
                state: document.getElementById('state').value,
                city: document.getElementById('city').value,
                time: dateTime
            };
            userData.push(localUserData);

            $("#tbd").remove();

            onClearForm();
            addDataToTable();
        }
    }
}

function addDataToTable() {

    const table = document.getElementById("user");
    let localId;

    let tbody = document.createElement('tbody');
    tbody.id = 'tbd';

    userData.forEach(item => {
        const row = document.createElement('tr');
        localId = item.id;

        delete item["time"];
        Object.values(item).forEach(value => {
            const td = document.createElement('td');
            td.appendChild(document.createTextNode(value));
            row.appendChild(td);
        });

        //add delete button
        const dbtd = document.createElement('td');
        let x = document.createElement("button");
        x.textContent = 'Delete';
        x.setAttribute("onClick", "removeUserData(this.id)");
        x.id = localId;
        x.className = 'button'
        dbtd.appendChild(x);
        row.appendChild(dbtd);

        //add edit button
        const ebtd = document.createElement('td');
        let e = document.createElement("button");
        e.setAttribute("onClick", "editUserData(this.id)");

        e.textContent = 'Edit';
        e.id = localId;
        e.className = 'button'
        row.appendChild(ebtd);

        ebtd.appendChild(e);
        row.appendChild(ebtd);
        tbody.appendChild(row);
        table.appendChild(tbody);
    });

}


function updateUserData(updateid) {

    //get gender
    let localGender = document.getElementsByName('gender')
    for (i = 0; i < localGender.length; i++) {
        if (localGender[i].checked)
            localGender = localGender[i].value;
    }

    //get hobbies
    let checkHobbies =
        document.getElementsByName('hobbies');
    let result = [];
    for (let i = 0; i < checkHobbies.length; i++) {
        if (checkHobbies[i].checked) {
            result.push(checkHobbies[i].value);
        }
    }
    let varName = document.getElementById("sbt").value;
    if (userData.length <= 0) {
        document.getElementById('userid').setAttribute('style', 'color: red; font-size: larger; font-weight: bold;');
        document.getElementById('userid').innerHTML = "Can't Found ! User Data Deleted.";
        return;
    }
    let idFoundFlag = false;
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].id === varName) {
            updateid = i;
            idFoundFlag = true
            break;
        }
    }
    if (idFoundFlag == false) {
        document.getElementById('userid').setAttribute('style', 'color: red; font-size: larger; font-weight: bold;');
        document.getElementById('userid').innerHTML = "Can't Found ! User Data Deleted.";
        return;
    }

    userData[updateid].name = document.getElementById('name').value;
    userData[updateid].email = document.getElementById('email').value;
    userData[updateid].gender = localGender;
    userData[updateid].hobbies = result;
    userData[updateid].age = document.getElementById('age').value;
    userData[updateid].country = document.getElementById('country').value;
    userData[updateid].state = document.getElementById('state').value;
    userData[updateid].city = document.getElementById('city').value;
    userData[updateid].time = dateTime;
    $("#tbd").remove();

    onClearForm();

    addDataToTable();
}

function onClearForm() {

    document.getElementById("ubt").style.visibility = "hidden";

    let element = document.getElementById('sbt');
    element.innerHTML = 'Submit';

    $("#userForm").submit(e => {
        e.preventDefault();

    });
    document.getElementById('userid').innerHTML = '';
    document.getElementById("userForm").reset();

    document.getElementById("city").innerHTML = null;
    document.getElementById("state").innerHTML = null;

    let ci = document.getElementById("city");
    let optionCi = document.createElement("option");
    optionCi.text = "Select City";
    ci.add(optionCi);

    let st = document.getElementById("state");
    let optionSt = document.createElement("option");
    optionSt.text = "Select State";
    st.add(optionSt);

    clearPTag();
}

function tableOder() {

    let myTable = document.getElementById("user");
    let rowCount = myTable.rows.length;
    for (let x = rowCount - 1; x > 0; x--) {
        myTable.deleteRow(x);
    }

    let order = document.getElementById("order").value;

    if (order != 'Select Order') {
        if (order == 'Ascending') {
            userData.sort((a, b) => {
                let fa = a.name.toLowerCase(),
                    fb = b.name.toLowerCase();

                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });
        } else if (order == 'Descending') {
            userData.sort((a, b) => {
                let fa = a.name.toLowerCase(),
                    fb = b.name.toLowerCase();

                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            }).reverse();
        }
    }
    addDataToTable();
}
