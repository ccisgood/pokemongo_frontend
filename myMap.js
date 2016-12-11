var map_manager = {
    "map" : null,
    "map_items" : []
}

map_manager.map_items = [
    {
        "pokemon_id" : 12,
        "expire" : 1480822665,
        "longitude" : -73.45,
        "latitude" : 40.75
    },
    {
        "pokemon_id" : 2,
        "expire" : 1480822665,
        "longitude" : -73.48,
        "latitude" : 40.75
    }
]

function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'Ahp8HL6okfKsJe2mlgMSaYtvwg-LwgPufSSS4Jk2DuAp2_uTs7dX-X8ylHGGm_bU'
    });
    map_namager.map = map;
    
    for (var i in map_manager.map_items) {
        var map_item = map_manager.map_items[i];
        var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(latitude: map_item["latitude"], longitude: map_item["longitude"]), 
                                                 { icon: 'https://github.com/ccisgood/pokemongo_image/tree/gh-pages/images/pushpin_images/pokemon/' + map_item["pokemon_id"] + '.png'});
        map.entities.push(pushpin);
    }
}
