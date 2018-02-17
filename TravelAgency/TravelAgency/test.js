function addNewFlight() {
    var div = document.createElement('div');
    var airline = document.createElement('input');
    var departure = document.createElement('input');
    var departTime = document.createElement('input');
    var arrival = document.createElement('input');
    var arrivTime = document.createElement('input');
    var flightPrice = document.createElement('input');
    var h4 = document.createElement('h4');

    var label1 = document.createElement('label');
    var label2 = document.createElement('label');
    var label3 = document.createElement('label');
    var label4 = document.createElement('label');
    var label5 = document.createElement('label');
    var label6 = document.createElement('label');

    label1.innerHTML = 'Enter airline:';
    label2.innerHTML = 'Enter flight departure location: ';
    label3.innerHTML = 'Enter flight departure time/date: ';
    label4.innerHTML = 'Enter flight arrival location: ';
    label5.innerHTML = 'Enter flight arrival time/date: ';
    label6.innerHTML = 'Enter flight price: $: ';

    h4.innerHTML = 'Flight';

    div.setAttribute('class', 'flight-data');
    airline.setAttribute('name', 'airline');
    departure.setAttribute('name', 'departure');
    departTime.setAttribute('name', 'depart-time');
    arrival.setAttribute('name', 'arrival');
    arrivTime.setAttribute('name', 'arriv-time');
    flightPrice.setAttribute('name', 'flight-price');


    airline.type = 'text';
    departure.type = 'text';
    departTime.type = 'text';
    arrival.type = 'text';
    arrivTime.type = 'text';
    flightPrice.type = 'text';

    var par = document.getElementsByClassName("flight-container")[0];
    par.appendChild(div);
    div.appendChild(h4);
    div.appendChild(label1);
    div.appendChild(airline);
    div.appendChild(createBr());
    div.appendChild(createBr());
    div.appendChild(label2);
    div.appendChild(departure);
    div.appendChild(createBr());
    div.appendChild(createBr());
    div.appendChild(label3);
    div.appendChild(departTime);
    div.appendChild(createBr());
    div.appendChild(createBr());
    div.appendChild(label4);
    div.appendChild(arrival);
    div.appendChild(createBr());
    div.appendChild(createBr());
    div.appendChild(label5);
    div.appendChild(arrivTime);
    div.appendChild(createBr());
    div.appendChild(createBr());
    div.appendChild(label6);
    div.appendChild(flightPrice);

}

function checkData() {

}

function createBr() {
    var br = document.createElement('br');
    return br;
}
