//getCountry();

// function getCountry(){
//     let select = document.getElementById("country");
// let country = ["India", "China", "Pakistan", "Japan"];

// for (let i = 0; i < country.length; i++) {
//     let optn = country[i];
//     let el = document.createElement("option");
//     el.textContent = optn;
//     el.value = optn;
//     select.appendChild(el);
// }
// }

// let stateArray;
// let cityArray;

// function getState() {
//     var e = document.getElementById("country");
//     document.getElementById("state").innerHTML = "";
//     //var value = e.value;
//     var text = e.options[e.selectedIndex].text;
//     if (text === 'India') {
//         stateArray = ["Gujarat", "Maharashtra", "UP", "Bihar"];
//     } else if (text === 'China') {
//         stateArray = ["Gansu", "Fujian", "Hainan", "Yunnan"];
//     } else if (text === 'Pakistan') {
//         stateArray = ["Balochistan", "Khyber Pakhtunkhwa", "Punjab"];
//     } else {
//         stateArray = ["Hiroshima", "AoHokkaidomori", "ChHyogoiba", "Ibaragi"];
//     }
//     setStateData();
//     getCity();

// }

// function getCity() {

//     var e = document.getElementById("country");
//     document.getElementById("city").innerHTML = "";
//     var text = e.options[e.selectedIndex].text;

//     var e2 = document.getElementById("state");
//     var text2 = e2.options[e2.selectedIndex].text;
//     if (text === 'India') {
//         switch (text2) {
//             case 'Gujarat':
//                 cityArray = ["Ahmedabad", "Surat", "Vadodara", "Anand"];
//                 break;
//             case 'Maharashtra':
//                 cityArray = ["Pune", "Mumbai", "Nagpur", "Thane"];
//                 break;
//             case 'UP':
//                 cityArray = ["Prayagraj", "Agra", "Meerut", "Noida"];
//                 break;
//             case 'Bihar':
//                 cityArray = ["Patna", "Sasaram", "Gaya", "Purnia"];
//                 break;

//         }
//     } else if (text == 'China') {
//         switch (text2) {
//             case 'Gansu':
//                 cityArray = ["Lanzhou", "Tianshui", "Dingxi", "Linxia"];
//                 break;
//             case 'Fujian':
//                 cityArray = ["Fuzhou", "Xiamen", "Quanzhou", "Zhangzhou"];
//                 break;
//             case 'Hainan':
//                 cityArray = ["Haikou", "Sanya", "Qionghai", "Wanning"];
//                 break;
//             case 'Yunnan':
//                 cityArray = ["Kunming", "Lijiang", "Dali", "Yuxi"];
//                 break;

//         }
//     }
//     else if (text == 'Pakistan') {
//         switch (text2) {
//             case 'Balochistan':
//                 cityArray = ["Faisalabad", "Rawalpindi", "Peshawar", "Loralai"];
//                 break;
//             case 'Khyber Pakhtunkhwa':
//                 cityArray = ["Charsadda", "AzPeshawarizabad", "Barikot", "Malakand"];
//                 break;
//             case 'Punjab':
//                 cityArray = ["Rajanpur", "SRawalpindianya", "QionSadiqabadghai", "Safdarabad"];
//                 break;

//         }
//     } else {
//         switch (text2) {
//             case 'ChHyogoiba':
//                 cityArray = ["Chiba"];
//                 break;
//             case 'Ibaraki':
//                 cityArray = ["Ibaragi", "Mito", "Hitachi", "Koga"];
//                 break;

//         }
//     }
//     setCityData();
// }

// function setCityData() {
//     let select = document.getElementById("city");
//     for (let i = 0; i < cityArray.length; i++) {
//         let optn = cityArray[i];
//         let el = document.createElement("option");
//         el.textContent = optn;
//         el.value = optn;
//         select.appendChild(el);
//     }
// }

// function setStateData() {
//     let select = document.getElementById("state");

//     for (let i = 0; i < stateArray.length; i++) {
//         let optn = stateArray[i];
//         let el = document.createElement("option");
//         el.textContent = optn;
//         el.value = optn;
//         select.appendChild(el);
//     }
// }