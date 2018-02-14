var hotels = [
    {
        "name": "Hyatt",
        "location": "711 Waverly Place, London",
        "price": 69
    },
    {
        "name": "Marriott",
        "location": "1234 Mason Ave, London",
        "price": 72
    },
    {
        "name": "W Hotel",
        "location": "6543 South 11th Street, London",
        "price": 87
    },
    {
        "name": "Rits Carlton",
        "location": "34564 5th Street, London",
        "price": 101
    },
    {
        "name": "Super 8",
        "location": "999 Nowhere, London",
        "price": 63
    },
    {
        "name": "Hilton",
        "location": "9234 Have Ave, London",
        "price": 87
    }
]

randomlyArrangeHotelListings();

function randomlyArrangeHotelListings() {
    hotel_cells = document.getElementsByClassName("hotel-cell")
    var order = Math.floor(Math.random() * hotel_cells.length);
    for (let i = 0; i < hotel_cells.length; i++) {
        var hotel_cell = hotel_cells[i];
        var jsonHotelInfo = hotels[(i+order)%hotel_cells.length]; // not important. Just randomly chooses a different index to start on so the order appears random on refresh
        hotel_cell.children[1].innerHTML = jsonHotelInfo.name;
        hotel_cell.children[2].innerHTML = jsonHotelInfo.location;
        hotel_cell.children[3].innerHTML = "$"+jsonHotelInfo.price;
    }
}



