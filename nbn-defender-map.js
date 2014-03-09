/*globals L*/
(function( L, $ ) {
	'use strict';

	var mapElement, map, zoomControl, streetMap;

	// fix size of map
	mapElement = $( '#map' );
	mapElement.height( $( 'footer' ).offset().top - mapElement.offset().top );

	// initialise map
	map = L.map('map', {zoomControl: false}).setView([ -27, 133.5 ], 3 );

	// Add a zoom control back in, on the right hand side
	zoomControl = new L.Control.Zoom({position: 'topright'});
	zoomControl.addTo(map);

	// set Australia bounds (with tolerance) NW -> SE
	// http://www.ga.gov.au/education/geoscience-basics/dimensions/continental-extremities.html
	map.setMaxBounds([[ -10, 113 ], [ -44, 154 ]]);
	map.fitBounds([[ -10, 113 ], [ -44, 154 ]]);


	// need a tile server

	// free ESRI street map
	// http://www.arcgis.com/home/item.html?id=3b93337983e9436f8db950e38a8629af
	streetMap = L.tileLayer( 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
		attribution: 'Esri, DeLorme, HERE, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), MapmyIndia, TomTom'
	});

	streetMap.addTo( map );


}( L, jQuery ));
