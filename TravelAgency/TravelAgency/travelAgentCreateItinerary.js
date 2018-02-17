
function addNewDay() {
    var divDayContainer = document.createElement('div')
    var dateInput = document.createElement('input')
    var locInput = document.createElement('input')

    var dateLabel = document.createElement('label')
    var locLabel = document.createElement('label')

    dateLabel.innerHTML = "Enter Date: "
    locLabel.innerHTML = "Enter Location: "

    divDayContainer.setAttribute('class', 'create-itinerary-day-container')
    dateInput.setAttribute('name', 'date')
    dateInput.setAttribute('min', '2018-01-12')
    locInput.setAttribute('name', 'location')

    dateInput.type = 'date'
    locInput.type = 'text'

    var par = document.getElementsByClassName("create-itinerary-container")[0]

    divDayContainer.appendChild(createBr())
    divDayContainer.appendChild(createBr())
    divDayContainer.appendChild(dateLabel)
    divDayContainer.appendChild(dateInput)
    divDayContainer.appendChild(createBr())
    divDayContainer.appendChild(createBr())
    divDayContainer.appendChild(locLabel)
    divDayContainer.appendChild(locInput)
    divDayContainer.appendChild(createBr())
    divDayContainer.appendChild(createBr())
    addMoreDetails(divDayContainer)
    par.appendChild(divDayContainer)
}

// add another 2 input boxes to add an event
function addMoreDetails(specifiedClass = null) {
    var div = document.createElement('div');
    var time = document.createElement('input')
    var details = document.createElement('input')

    var timeLabel = document.createElement('label')
    var detailLabel = document.createElement('label')
    
    timeLabel.innerHTML = "Enter time: "
    detailLabel.innerHTML = "Enter event details: "

    div.setAttribute('class', 'create-itinerary-day-event')
    time.setAttribute('name', 'time')
    details.setAttribute('name', 'details')

    time.type = 'text'
    details.type = 'text'

    var par
    if(specifiedClass == null) {
        par = document.getElementsByClassName("create-itinerary-day-container");
        par = par[par.length-1]        
    } else {
        par = specifiedClass
    }

    div.appendChild(timeLabel)
    div.appendChild(time)
    div.appendChild(createBr())
    div.appendChild(createBr())
    div.appendChild(detailLabel)
    div.appendChild(details)
    div.appendChild(createBr())
    div.appendChild(createBr())    
    par.appendChild(div)
}

function createBr() {
    var br = document.createElement('br');
    return br;
}

function finish() {
    days = document.getElementsByClassName('create-itinerary-day-container')
    var itinerary = []
    for (let i = 0; i < days.length; i++) {
        // access the day and it's details
        var day = days[i];
        var inputs = getListOfElements(day.children, "input")
        var date = inputs[0].value
        var location = inputs[1].value
        var divs = getListOfElements(day.children, "div")
        // access the events of that day
        var itineraryEvents = []
        for (let x = 0; x < divs.length; x++) {
            const dayEvent = divs[x];
            var inputs_day = getListOfElements(dayEvent.children, "input")
            var time = inputs_day[0].value
            var details = inputs_day[1].value
            itineraryEvents.push(
                {
                    "time": time,
                    "details": details
                }
            )
        }
        itinerary.push(
            {
                "date": date,
                "location": location,
                "events": itineraryEvents
            }
        )
    }
    window.sessionStorage.setItem("itinerary", JSON.stringify(itinerary))
    window.location.href = "verify.html"
}

function getListOfElements(searchSpace, name) {
    result = []
    for (let i = 0; i < searchSpace.length; i++) {
        const element = searchSpace[i];
        if(element.localName == name) {
            result.push(element)
        }
    }
    return result
}