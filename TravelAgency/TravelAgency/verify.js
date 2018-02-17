var itinerary = JSON.parse(sessionStorage.getItem('itinerary'));
console.log(itinerary);

/*
<div class="calendar-day-container">
    <div class="date-loc">
        <h1>Dec 23</h1>
        <h4>London</h4>
    </div>
    <div class="times">
        <h4>8am </h4>
        <h4>10am </h4>
        <h4>11am </h4>
        <h4>12am </h4>
    </div>
    <div class="descriptions">
        <h4>Breakfast</h4>
        <h4>Ferry Ride</h4>
        <h4>Walk along bank</h4>
        <h4>Lunch Fish and stuff</h4>
    </div>
    <div class="image">
        <img src="https://static.wixstatic.com/media/452e60_27ef7a2058ce4f9783bf21e03404dc78~mv2_d_5424_3051_s_4_2.jpg/v1/fill/w_630,h_354,al_c,q_80,usm_0.66_1.00_0.01/452e60_27ef7a2058ce4f9783bf21e03404dc78~mv2_d_5424_3051_s_4_2.webp" alt="Day3">
    </div>
</div>
*/

for (let i = 0; i < itinerary.length; i++) {
    var calendarDay = document.createElement('div');
    var dateLoc = document.createElement('div');
    var times = document.createElement('div');
    var descriptions = document.createElement('div');
    var date = document.createElement('h1');
    var loc = document.createElement('h4');
    var par = document.getElementsByClassName("verify-container info")[0];

    calendarDay.setAttribute('class', "calendar-day-container");
    dateLoc.setAttribute('class', "date-loc");
    times.setAttribute('class', "times");
    descriptions.setAttribute('class', "descriptions");
    date.innerHTML = itinerary[i].date.substring(5);
    loc.innerHTML = itinerary[i].location;

    for (let j = 0; j < itinerary[i].events.length; j++) {
        var time = document.createElement('h4');
        var description = document.createElement('h4');

        time.innerHTML = itinerary[i].events[j].time;
        description.innerHTML = itinerary[i].events[j].details;

        times.appendChild(time);
        descriptions.appendChild(description);
    }

    par.appendChild(calendarDay);
    calendarDay.appendChild(dateLoc);
    dateLoc.appendChild(date);
    dateLoc.appendChild(loc);
    calendarDay.appendChild(times);
    calendarDay.appendChild(descriptions);
}


function createBr() {
    var br = document.createElement('br');
    return br;
}

function nextPage() {
    window.location.href = "checkout.html";
}

console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}

console.log("session storage");
for (i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
}
