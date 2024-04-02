//var place = { "country": [{ "countryname": "United States", "id": "usa", "states": [{ "name": "State 1 USA", "id": "usaState1", "cities": [{ "name": "US City 1", "id": "usaState1City1", "area": "12345 sqkm" }, { "name": "US City 2", "id": "usaState1City2", "area": "12345 sqkm" }] }, { "name": "State 2 USA", "id": "usaState2", "cities": [{ "name": "US City 3", "id": "usaState2City3", "area": "12345 sqkm" }, { "name": "US City 4", "id": "usaState2City4", "area": "12345 sqkm" }] }] }, { "countryname": "Australia", "id": "aus", "states": [{ "name": "State 1 Australia", "id": "ausState1", "cities": [{ "name": "Aust City 5", "id": "ausState1City5", "area": "12345 sqkm" }, { "name": "Aust City 6", "id": "ausState1City6", "area": "12345 sqkm" }] }, { "name": "State 2 Australia", "id": "ausState2", "cities": [{ "name": "Aust City 7", "id": "ausState2City7", "area": "12345 sqkm" }, { "name": "Aust City 8", "id": "ausState2City8", "area": "12345 sqkm" }] }] }] };
// var jsonPlace = JSON.parse(place);
// alert(jsonPlace["country"][0]["countryname"]);
// alert(jsonPlace["country"][0]["states"][0]["name"]);
// alert(jsonPlace["country"][0]["states"][0]["cities"][0]["name"]);
// //alert(json.length);
//alert(place.country[0].countryname);
var place = { "country": [{ "countryname": "India", "states": [ { "name": "Gujarat", "cities": [ { "name": "Ahmedabad" }, { "name": "Surat" }, { "name": "Vadodara" }, { "name": "Anand" } ] }, { "name": "Maharashtra", "cities": [ { "name": "Pune" }, { "name": "Mumbai" }, { "name": "Nagpur" }, { "name": "Thane" } ] }, { "name": "UP", "cities": [ { "name": "Prayagraj" }, { "name": "Agra" }, { "name": "Meerut" }, { "name": "Noida" } ] }, { "name": "Bihar", "cities": [ { "name": "Patna" }, { "name": "Sasaram" }, { "name": "Gaya" }, { "name": "Purnia" } ] } ] }, { "countryname": "China", "states": [ { "name": "Gansu", "cities": [ { "name": "Lanzhou" }, { "name": "Tianshui" }, { "name": "Dingxi" }, { "name": "Linxia" } ] }, { "name": "Fujian", "cities": [ { "name": "Fuzhou" }, { "name": "Xiamen" }, { "name": "Quanzhou" }, { "name": "Zhangzhou" } ] }, { "name": "Hainan", "cities": [ { "name": "Haikou" }, { "name": "Sanya" }, { "name": "Qionghai" }, { "name": "Wanning" } ] }, { "name": "Yunnan", "cities": [ { "name": "Kunming" }, { "name": "Lijiang" }, { "name": "Dali" }, { "name": "Yuxi" } ] } ] }, { "countryname": "Pakistan", "states": [ { "name": "Balochistan", "cities": [ { "name": "Faisalabad" }, { "name": "Rawalpindi" }, { "name": "Peshawar" } ] }, { "name": "Khyber Pakhtunkhwa", "cities": [ { "name": "Charsadda" }, { "name": "AzPeshawarizabad" }, { "name": "Malakand" } ] }, { "name": "Punjab", "cities": [ { "name": "Rajanpur" }, { "name": "SRawalpindianya" }, { "name": "QionSadiqabadghai" }, { "name": "Safdarabad" } ] } ] }, { "countryname": "Japan", "states": [ { "name": "ChHyogoiba", "cities": [ { "name": "Chiba" } ] }, { "name": "Ibaragi", "cities": [ { "name": "Ibaragi" }, { "name": "Mito" }, { "name": "Hitachi" }, { "name": "Koga" } ] } ] } ] };

getCountry();

function getCountry() {
    let select = document.getElementById("country");

    for (var i = 0; i < place.country.length; i++) {
        let optn = place.country[i].countryname;
        let el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
    }
}

// document.getElementById('country').onchange = function() {
//     alert(this.value);
//     getState(this.value);
//   };

function getState(text) {

    var e = document.getElementById("country");
    document.getElementById("state").innerHTML = "";
    var text = e.options[e.selectedIndex].text;
    let select = document.getElementById("state");
    for (var j = 0; j < place.country.length; j++) {
        if (text === place.country[j].countryname) {
            for (var i = 0; i < place.country[j].states.length; i++) {
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
//alert(text);
    let e2 = document.getElementById("state");
    let text2 = e2.options[e2.selectedIndex].text;
//alert(text2);
    for (var j = 0; j < place.country.length; j++) {
        if (text1 === place.country[j].countryname) {

            for (var i = 0; i < place.country[j].states.length; i++) {
                if (text2 === place.country[j].states[i].name) {
                    for (var k = 0; k < place.country[j].states[i].cities.length; k++) {
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
