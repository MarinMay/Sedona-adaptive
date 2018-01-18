var myMap;

ymaps.ready(init);

function init () {
  myMap = new ymaps.Map('map', {
    center: [34.869497, -111.760186],
    zoom: 10,
    controls: ['zoomControl', 'typeSelector',  'fullscreenControl', 'routeButtonControl'],
    behaviors: ['drag']
  });

  var myPlacemark = new  ymaps.Placemark([34.869497, -111.760186], {
    hintContent: "Седона - рай для туристов!"
  });

  myMap.geoObjects.add(myPlacemark);
}
