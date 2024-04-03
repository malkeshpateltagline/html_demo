function removeUserData(idLocal) {

    for (let i = 0; i < userData.length; i++) {

        if (userData[i].id === idLocal) {

            userData.splice(i, 1);
            break;
        }
    }

    $("#tbd").remove();
    addDataToTable();
}