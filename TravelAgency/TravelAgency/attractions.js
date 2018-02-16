var attractions = [
    {
        "name": "Hot Air Balloon over Italy",
        "info": "Wednesday Jan 10th @ 7:00am"
    },
    {
        "name": "Art Musuem",
        "info": "Tuesday Feb 9th @ 5:30pm"
    },
    {
        "name": "Deep Sea Fishing",
        "info": "Friday Mar 30th @ 4:00am"
    },
    {
        "name": "Bus Tour of London",
        "info": "Saturday Aug 3rd @ 12:00pm"
    },
    {
        "name": "Dinner in Eiffel Tower",
        "info": "Sunday Jul 15th @ 6:15pm"
    },
    {
        "name": "Whale Watching",
        "info": "Thursday Apr 1st @ 6:00pm"
    }
]

randomlyArrangeAttractions();

function randomlyArrangeAttractions() {
    attraction_cells = document.getElementsByClassName("attraction-cell")
    console.log(attraction_cells)
    var order = Math.floor(Math.random() * attraction_cells.length);
    for (let i = 0; i < attraction_cells.length; i++) {
        var attraction_cell = attraction_cells[i];
        var jsonAttractionInfo = attractions[(i+order)%attraction_cells.length]; // not important. Just randomly chooses a different index to start on so the order appears random on refresh
        attraction_cell.children[1].innerHTML = jsonAttractionInfo.name;
        attraction_cell.children[2].innerHTML = jsonAttractionInfo.info;
    }
}



