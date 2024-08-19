import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { FeatureGroup } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw"

const MapComponent = ({ setAreaDetails }) => {
    window.type = true;
    const [mapCenter] = useState([23.8759, 90.3795]); // Default center
    const [zoom] = useState(13); // Default zoom
    const onCreated = (e) => {
        const {layer} = e;
        const bounds = layer.getBounds();
        const southWest= bounds.getSouthWest(),northEast= bounds.getNorthEast();
        const centerLat = (southWest.lat + northEast.lat) / 2, centerLng = (southWest.lng + northEast.lng) / 2;
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${centerLat}&lon=${centerLng}&format=json`)
        .then(async(res)=>{
            const data=await res.json();
            if(!res.ok) throw new Error(data?.error?.message || "Error!");
            setAreaDetails({
                Area: data?.display_name||"No name",
                SouthWest: southWest.lat+", "+southWest.lng,
                NorthEast: northEast.lat+", "+northEast.lng,
            });
        }).catch(err=>{
            console.log(err);
            setAreaDetails({error:"Unknown Error!"});
        })
    };

    return (
        <MapContainer
            center={mapCenter}
            zoom={zoom}
            scrollWheelZoom={true}
            style={{ height: "100vh", width: "100%" }}
        >
            <TileLayer
                url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
                attribution="&copy; Asrar Ahmed"
            />
            <FeatureGroup>
                <EditControl
                    position="topleft"
                    onCreated={onCreated}
                    onDeleted={(e) => setAreaDetails(null)}
                    draw={{
                        rectangle: true,
                        circle: true,
                        polyline: false,
                        polygon: false,
                        marker: false,
                        circlemarker: false,
                        showArea: false,
                    }}
                />
            </FeatureGroup>
        </MapContainer>
    );
};

export default MapComponent;
