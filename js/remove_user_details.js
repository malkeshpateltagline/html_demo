
function removeUserData(idLocal) {
   
    for (let i = 0; i < userData.length; i++) {
        //alert(i);
        if (userData[i].id === idLocal) {           
           //alert(text);
            userData.splice(i, 1);
            break;
        }
    }
    //alert(userData.length);
    // for (let i = 0; i < userData.length; i++) {
    //     alert(userData[i].id);
    // }

    // var x = document.getElementById("user").rows.length;

    // for (let k = 1; k <= x; k++) {
    //     document.getElementsByTagName("tr")[k].remove();
    // }
    //onSubmitData();
//     var Table = document.getElementById("user");
// Table.innerHTML = "";
$("#tbd").remove();
    addDataToTable();

    //let index = userData.findIndex(x => x.id === id);
    //const index = userData.map(i => i.id).indexOf(id);
    //alert(index);
    //userData.slice(index, 1);   
    // var row = document.getElementById(id);
    // row.parentNode.removeChild(row);
}