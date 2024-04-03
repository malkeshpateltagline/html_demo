let place = { "country": [{ "countryname": "India", "states": [{ "name": "Gujarat", "cities": [{ "name": "Ahmedabad" }, { "name": "Surat" }, { "name": "Vadodara" }, { "name": "Anand" }] }, { "name": "Maharashtra", "cities": [{ "name": "Pune" }, { "name": "Mumbai" }, { "name": "Nagpur" }, { "name": "Thane" }] }, { "name": "UP", "cities": [{ "name": "Prayagraj" }, { "name": "Agra" }, { "name": "Meerut" }, { "name": "Noida" }] }, { "name": "Bihar", "cities": [{ "name": "Patna" }, { "name": "Sasaram" }, { "name": "Gaya" }, { "name": "Purnia" }] }] }, { "countryname": "China", "states": [{ "name": "Gansu", "cities": [{ "name": "Lanzhou" }, { "name": "Tianshui" }, { "name": "Dingxi" }, { "name": "Linxia" }] }, { "name": "Fujian", "cities": [{ "name": "Fuzhou" }, { "name": "Xiamen" }, { "name": "Quanzhou" }, { "name": "Zhangzhou" }] }, { "name": "Hainan", "cities": [{ "name": "Haikou" }, { "name": "Sanya" }, { "name": "Qionghai" }, { "name": "Wanning" }] }, { "name": "Yunnan", "cities": [{ "name": "Kunming" }, { "name": "Lijiang" }, { "name": "Dali" }, { "name": "Yuxi" }] }] }, { "countryname": "Pakistan", "states": [{ "name": "Balochistan", "cities": [{ "name": "Faisalabad" }, { "name": "Rawalpindi" }, { "name": "Peshawar" }] }, { "name": "Khyber Pakhtunkhwa", "cities": [{ "name": "Charsadda" }, { "name": "AzPeshawarizabad" }, { "name": "Malakand" }] }, { "name": "Punjab", "cities": [{ "name": "Rajanpur" }, { "name": "SRawalpindianya" }, { "name": "QionSadiqabadghai" }, { "name": "Safdarabad" }] }] }, { "countryname": "Japan", "states": [{ "name": "ChHyogoiba", "cities": [{ "name": "Chiba" }] }, { "name": "Ibaragi", "cities": [{ "name": "Ibaragi" }, { "name": "Mito" }, { "name": "Hitachi" }, { "name": "Koga" }] }] }] };

getCountry();

function getCountry() {
    let select = document.getElementById("country");

    for (let i = 0; i < place.country.length; i++) {
        let optn = place.country[i].countryname;
        let el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
    }
}

function getState() {

    let e = document.getElementById("country");
    document.getElementById("state").innerHTML = "";
    let text = e.options[e.selectedIndex].text;
    let select = document.getElementById("state");
    for (let j = 0; j < place.country.length; j++) {
        if (text === place.country[j].countryname) {
            for (let i = 0; i < place.country[j].states.length; i++) {
                let optn = place.country[j].states[i].name;
                let el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
                select.appendChild(el);
            }
        }
    }
    getCity();
}

function getCity() {
    let e = document.getElementById("country");
    document.getElementById("city").innerHTML = "";
    let text1 = e.options[e.selectedIndex].text;

    let e2 = document.getElementById("state");
    let text2 = e2.options[e2.selectedIndex].text;

    for (let j = 0; j < place.country.length; j++) {
        if (text1 === place.country[j].countryname) {

            for (let i = 0; i < place.country[j].states.length; i++) {
                if (text2 === place.country[j].states[i].name) {
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
