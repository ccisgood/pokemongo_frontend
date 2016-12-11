var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    credentials: 'Ahp8HL6okfKsJe2mlgMSaYtvwg-LwgPufSSS4Jk2DuAp2_uTs7dX-X8ylHGGm_bU'
});
var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png',
    anchor: new Microsoft.Maps.Point(12, 39) });
map.entities.push(pushpin);
