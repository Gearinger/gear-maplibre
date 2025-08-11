import maplibregl, { NavigationControl, Map, IControl } from "maplibre-gl";
import { map } from "./MapUtil";
import MaplibreGeocoder, { MaplibreGeocoderApi, MaplibreGeocoderFeatureResults } from "@maplibre/maplibre-gl-geocoder";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'

/**
 * 添加地理编码控件
 */
export function addGeocoderController(): Map {
    // 添加地理编码控件
    var geocoder_api: MaplibreGeocoderApi = {
        forwardGeocode: async (config): Promise<MaplibreGeocoderFeatureResults> => {
            const features: any = [];
            try {
                let request =
                    'https://nominatim.openstreetmap.org/search?q=' +
                    config.query +
                    '&format=geojson&polygon_geojson=1&addressdetails=1';
                const response = await fetch(request);
                const geojson = await response.json();
                for (let feature of geojson.features) {
                    let center = [
                        feature.bbox[0] +
                        (feature.bbox[2] - feature.bbox[0]) / 2,
                        feature.bbox[1] +
                        (feature.bbox[3] - feature.bbox[1]) / 2
                    ];
                    let point = {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: center
                        },
                        place_name: feature.properties.display_name,
                        properties: feature.properties,
                        text: feature.properties.display_name,
                        place_type: ['place'],
                        center: center
                    };
                    features.push(point);
                }
            } catch (e) {
                console.error(`Failed to forwardGeocode with error: ${e}`);
            }

            return {
                features: features,
                type: 'FeatureCollection',
            };
        }
    };
    map.addControl(
        new MaplibreGeocoder(
            geocoder_api,
            {
                maplibregl: maplibregl
            })
    );
    return map;
}

/**
 * 添加常用地图控件
 */
export function addNavigationControl(): Map {
    // 添加常用地图控件
    map.addControl(new NavigationControl({}))
    return map;
};

export function addDrawControl(): Map {
    map.addControl(new MapboxDraw() as any);
    return map;
}