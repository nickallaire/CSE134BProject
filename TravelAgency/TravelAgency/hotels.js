var data = JSON.parse(sessionStorage.getItem('accomodationData'));
console.log(data[0]);

var row = -1;
for (let i = 0; i < data.length; i++) {
    if (i % 3 === 0) {
        row = row + 1;
        var tr = document.createElement('tr');
        tr.setAttribute('class', "hotel-row");
        var par = document.getElementsByClassName("hotel-table");
        par[0].appendChild(tr);
    }
    createDiv(row, data[i].accomodationType, data[i].accomodationName, data[i].accomodationLocation, data[i].accomodationPrice);
}


/*
<tr class="hotel-row">
    <td class="hotel-cell">
        <input type="checkbox" name="hotel1" />
        <h2>Rits Carlton</h2>
        <h3>34564 5th Street, London</h3>
        <h2>$101</h2>
    </td>
    <td class="hotel-cell">
        <input type="checkbox" name="hotel2" />
        <h2>Super 8</h2>
        <h3>999 Nowhere, London</h3>
        <h2>$63</h2>
    </td>
    <td class="hotel-cell">
        <input type="checkbox" name="hotel3" />
        <h2>Hilton</h2>
        <h3>9234 Have Ave, London</h3>
        <h2>$87</h2>
    </td>
</tr>
*/
function createDiv(row, varType, varName, varLocation, varPrice) {
    var td = document.createElement('td');
    var accomodation = document.createElement('input');
    var accomodationType = document.createElement('h2');
    var accomodationName = document.createElement('h3');
    var accomodationLocation = document.createElement('h3');
    var accomodationPrice = document.createElement('h3');

    accomodation.type = 'radio';
    accomodation.setAttribute('name', 'accomodation');

    td.setAttribute('class', "hotel-cell");

    accomodationType.innerHTML = varType;
    accomodationName.innerHTML = varName;
    accomodationLocation.innerHTML = varLocation;
    accomodationPrice.innerHTML = '$' + varPrice;

    var par = document.getElementsByClassName("hotel-row")[row];
    par.appendChild(td);
    td.appendChild(accomodation);
    td.appendChild(accomodationType);
    td.appendChild(accomodationName);
    td.appendChild(accomodationLocation);
    td.appendChild(accomodationPrice);

}

function checkData() {
    var accomodation = document.getElementsByClassName("hotel-cell");
    var index = -1;
    for (let i = 0; i < accomodation.length; i++) {
        var radio = accomodation[i].getElementsByTagName("input");
        if (radio[0].checked === true) {
            index = i;
            break;
        }
    }

    if (index != -1) {

        var type = accomodation[index].getElementsByTagName("h2")[0].innerHTML;
        var name = accomodation[index].getElementsByTagName("h3")[0].innerHTML;
        var location = accomodation[index].getElementsByTagName("h3")[1].innerHTML;
        var price = accomodation[index].getElementsByTagName("h3")[2].innerHTML;

        var hotelChosen = {
            hotelType: type,
            hotelName: name,
            hotelLocation: location,
            hotelPrice: price
        };

        sessionStorage.setItem("chosenHotel", JSON.stringify(hotelChosen));
        window.location.href = "travelAgentCreateItinerary.html";
    } else {
        alert("Please select a hotel");
    }
}

console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}

console.log("session storage");
for (i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
}