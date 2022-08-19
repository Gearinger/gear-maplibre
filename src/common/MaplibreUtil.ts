import { MapGeoJSONFeature,Map,Marker } from "maplibre-gl"
import * as maplibregl from "maplibre-gl"
import * as turf from '@turf/turf'

export function drawAnno(feature: MapGeoJSONFeature, map: Map) {
    let pos = turf.center(feature.toJSON());

    var marker = new Marker()
        .setLngLat([30.5, 50.5])
        .addTo(map);

    
}

