import * as maplibregl from "maplibre-gl";
import { NavigationControl, Map } from "maplibre-gl";
import { map } from "./MapUtil";
import MaplibreGeocoder, { MaplibreGeocoderApi, MaplibreGeocoderFeatureResults } from "@maplibre/maplibre-gl-geocoder";

/**
 * 添加地理编码控件
 */
export function addGeocoderController(): Map {
    // 添加地理编码控件
    var geocoder_api: MaplibreGeocoderApi = {
        forwardGeocode: async (config): Promise<MaplibreGeocoderFeatureResults> => {
            const features: any = [];
            try {
                if (typeof config.query !== 'string') {
                    throw new Error('Forward geocoding requires a text query');
                }
                const request = new URL('https://nominatim.openstreetmap.org/search');
                request.searchParams.set('q', config.query);
                request.searchParams.set('format', 'geojson');
                request.searchParams.set('polygon_geojson', '1');
                request.searchParams.set('addressdetails', '1');
                const response = await fetch(request);
                if (!response.ok) {
                    throw new Error(`Geocoder request failed with status ${response.status}`);
                }
                const geojson = await response.json() as GeoJSON.FeatureCollection<GeoJSON.Geometry, { display_name: string }>;
                for (let feature of geojson.features) {
                    if (!feature.bbox || feature.bbox.length < 4) continue;
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
