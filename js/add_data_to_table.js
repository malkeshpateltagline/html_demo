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
        var tip = document.getElementById("sbt");
        if (tip.textContent == 'Update') {
            //alert('inside..tip');
            updateUserData();
        } else {
            //alert('inside..tip');

            // var x = document.getElementById("user").rows.length;

            // for (let k = 0; k < x; k++) {
            //     document.getElementsByTagName("tr")[k].remove();
            //     alert('Hi....');
            // }

            //get gender
            let localGender = document.getElementsByName('gender')

            for (i = 0; i < localGender.length; i++) {
                if (localGender[i].checked)
                    localGender = localGender[i].value;
            }



            //get hobbies
            let checkHobbies = document.getElementsByName('hobbies');


            let result = [];
            for (var i = 0; i < checkHobbies.length; i++) {
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
            //alert(userData.length);

            $("#tbd").remove();

            // const element = document.getElementById("user");
            // while (element.firstElementChild) {
            //   element.removeChild(element.firstChild);


            //alert('Hi');
            //     table = document.getElementById("user").getElementsByTagName('tbody');
            // table=null;

            //  let text;
            //  for (let i = 0; i < userData.length; i++) {
            //        text=+userData[i].id;
            //        alert(userData[i].id);
            //     }
            //alert(text);
            //document.getElementById("enter").innerHTML =text;
            onClearForm();
            addDataToTable();
        }
    }
}

// function addDataToTable() {

//     let Table = document.getElementById("user").getElementsByTagName('tbody')[0];
//      Table.innerHTML = "";

//     for (let index = 0; index < userData.length; index++) {
//         //var tableRef = document.getElementById('user').getElementsByTagName('tbody')[0];
//         let tableString = '<tr>';
//         //†tableString += "<td>" + userData[index].id + "</td>";
//         tableString += "<td>" + userData[index].name + "</td>";
//         tableString += "<td>" + userData[index].email + "</td>";
//         tableString += "<td>" + userData[index].gender + "</td>";
//         tableString += "<td>" + userData[index].hobbies + "</td>";
//         tableString += "<td>" + userData[index].age + "</td>";
//         tableString += "<td>" + userData[index].country + "</td>";
//         tableString += "<td>" + userData[index].state + "</td>";
//         tableString += "<td>" + userData[index].city + "</td>";
//         //tableString += "<td>" + userData[index].time + "</td>";
//         tableString += '<td><a onclick="removeUserData('+ userData[index].id +')"class="button">Remove</a></td><td><a onclick="" id="'+userData[index].id+
//         '"class="button">Edit</a></td></tr>';
//         Table.insertRow().innerHTML = tableString;
//     }
//     //userData = [];
// };


// function addDataToTable() {

//     const newTable = document.getElementById("user");    
//     for(user of userData){
//         const row = document.createElement("tr");
//         row.id=user.id;
//         const name = document.createElement("td");
//         const email = document.createElement("td");
//         const gender = document.createElement("td");
//         const hobbies = document.createElement("td");
//         const age = document.createElement("td");
//         const country = document.createElement("td");
//         const state = document.createElement("td");
//         const city = document.createElement("td");
//         const update = document.createElement("td");
//         const edit = document.createElement("td");
//         name.textContent = user.name;
//         email.textContent = user.email;    
//         gender.textContent = user.gender;
//         hobbies.textContent = user.hobbies;
//         age.textContent = user.age;
//         country.textContent = user.country;    
//         state.textContent = user.state;
//         city.textContent = user.city;    
//         update.innerHTML ='<a onclick="removeUserData('+ user.id +')"class="button">Remove '+user.id+'</a>';
//         edit.innerHTML = '<a onclick="editUserData('+ user.id +')" id="'+user.id+'"class="button">Edit</a>';    
//         row.appendChild(name);
//         row.appendChild(email);
//         row.appendChild(gender);
//         row.appendChild(hobbies);
//         row.appendChild(age);
//         row.appendChild(country);
//         row.appendChild(state);
//         row.appendChild(city);
//         row.appendChild(update);
//         row.appendChild(edit);

//         newTable.appendChild(row);
//     }
// }

function addDataToTable() {

    var myTable = document.getElementById("user");
    var rowCount = myTable.rows.length;
    for (var x = rowCount - 1; x > 0; x--) {
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

    const table = document.getElementById("user");//.getElementsByTagName('tbody')[0];
    let localId;

    // var thead = document.createElement('thead');
    // const thr = document.createElement('tr');
    // const thdata = document.createElement('th');

    var tbody = document.createElement('tbody');
    tbody.id = 'tbd';

    userData.forEach(item => {
        const row = document.createElement('tr');
        localId = item.id;
        //delete item["id"];
        delete item["time"];
        Object.values(item).forEach(value => {
            const td = document.createElement('td');
            td.appendChild(document.createTextNode(value));
            row.appendChild(td);
        });

        //add delete button
        const dbtd = document.createElement('td');
        var x = document.createElement("button");
        x.textContent = 'Delete';
        x.setAttribute("onClick", "removeUserData(this.id)");
        x.id = localId;
        x.className = 'button'
        dbtd.appendChild(x);
        row.appendChild(dbtd);

        //add edit button
        const ebtd = document.createElement('td');
        var e = document.createElement("button");
        e.setAttribute("onClick", "editUserData(this.id)");
        //e.setAttribute('removeUserData(this.id)');
        e.textContent = 'Edit';
        e.id = localId;
        e.className = 'button'
        row.appendChild(ebtd);

        // e.addEventListener('click', () => {

        //     alert('Oh, you clicked me!')
        // })

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
    for (var i = 0; i < checkHobbies.length; i++) {
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
    //alert(updateid);
    //alert(document.getElementById('name').value);
    //alert(userData[i].id);

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

    var element = document.getElementById('sbt');
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

    document.getElementById("pname").innerHTML = "";
    document.getElementById("pemail").innerHTML = "";
    document.getElementById("pgender").innerHTML = "";
    document.getElementById("phobbies").innerHTML = "";
    document.getElementById("page").innerHTML = "";
    document.getElementById("pcountry").innerHTML = "";
}

function tableOder() {
 
    addDataToTable();
}
