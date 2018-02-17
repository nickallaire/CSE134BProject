var data = JSON.parse(sessionStorage.getItem('attractionData'));
console.log(data[0]);

var row = -1;
for (let i = 0; i < data.length; i++) {
    if (i % 3 === 0) {
        row = row + 1;
        var tr = document.createElement('tr');
        tr.setAttribute('class', "attraction-row");
        var par = document.getElementsByClassName("attraction-table");
        par[0].appendChild(tr);
    }
    createDiv(row, i, data[i].activityName, data[i].activityLocation, data[i].activityDateTime, data[i].activityPrice);
}


/*
<tr class="attraction-row">
    <td class="attraction-cell">
        <input type="checkbox" name="attraction4" />
        <h2>Bus Tour of London</h2>
        <h3>Saturday Aug 3rd @ 12:00pm</h3>
    </td>
    <td class="attraction-cell">
        <input type="checkbox" name="attraction5" />
        <h2>Dinner in Eiffel Tower</h2>
        <h3>Sunday Jul 15th @ 6:15pm</h3>
    </td>
    <td class="attraction-cell">
        <input type="checkbox" name="attraction6" />
        <h2>Whale Watching</h2>
        <h3>Thursday Apr 1st @ 6:00pm</h3>
    </td>
</tr>
*/
function createDiv(row, i, varName, varLocation, varDateTime, varPrice) {
    var td = document.createElement('td');
    var attraction = document.createElement('input');
    var attractionName = document.createElement('h2');
    var attractionLocation = document.createElement('h3');
    var attractionDateTime = document.createElement('h3');
    var attractionPrice = document.createElement('h3');

    attraction.type = 'checkbox';
    attraction.setAttribute('name', 'attraction' + i);

    td.setAttribute('class', "attraction-cell");

    attractionName.innerHTML = varName;
    attractionLocation.innerHTML = varLocation;
    attractionDateTime.innerHTML = varDateTime;
    attractionPrice.innerHTML = '$' + varPrice;

    console.log(varLocation);

    var par = document.getElementsByClassName("attraction-row")[row];
    par.appendChild(td);
    td.appendChild(attraction);
    td.appendChild(attractionName);
    td.appendChild(attractionLocation);
    td.appendChild(attractionDateTime);
    td.appendChild(attractionPrice);

}

function checkData() {
    var attraction = document.getElementsByClassName("attraction-cell");
    var index = [];
    for (let i = 0; i < attraction.length; i++) {
        var radio = attraction[i].getElementsByTagName("input");
        if (radio[0].checked === true) {
            index.push(i);
        }
    }

    if (index.length != 0) {

        var attractionsChosen = [];
        for (let i = 0; i < index.length; i++) {
            var an = attraction[i].getElementsByTagName("h2")[0].innerHTML;
            var al = attraction[i].getElementsByTagName("h3")[0].innerHTML;
            var adt = attraction[i].getElementsByTagName("h3")[1].innerHTML;
            var ap = attraction[i].getElementsByTagName("h3")[2].innerHTML;

            var attractionChosen = {
                activityName: an,
                activityLocation: al,
                activityDateTime: adt,
                activityPrice: ap
            };

            attractionsChosen.push(attractionChosen);
        }

        sessionStorage.setItem("chosenAttractions", JSON.stringify(attractionsChosen));
        window.location.href = "travelagenthotels.html";
    } else {
        var r = confirm("No attractions were selected, are you sure you want to continue?");
        if (r === true) {
            window.location.href = "travelagenthotels.html";
        } else {
            
        }
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