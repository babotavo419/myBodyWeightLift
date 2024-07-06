'use client';

import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png';
import "leaflet/dist/leaflet.css";

L.Icon.Default.mergeOptions({
    iconUrl,
    shadowUrl: iconShadowUrl,
});

const Map = () => {
    const [MapContainer, setMapContainer] = useState<any>(null);
    const [TileLayer, setTileLayer] = useState<any>(null);
    const [Marker, setMarker] = useState<any>(null);
    const [Popup, setPopup] = useState<any>(null);

    useEffect(() => {
        const loadLeafletComponents = async () => {
            const leafletModules = await Promise.all([
                import('react-leaflet').then((mod) => mod.MapContainer),
                import('react-leaflet').then((mod) => mod.TileLayer),
                import('react-leaflet').then((mod) => mod.Marker),
                import('react-leaflet').then((mod) => mod.Popup),
            ]);

            setMapContainer(leafletModules[0]);
            setTileLayer(leafletModules[1]);
            setMarker(leafletModules[2]);
            setPopup(leafletModules[3]);
        };

        loadLeafletComponents();
    }, []);

    const position: [number, number] = [41.6529143, -83.5378173];

    return (
        <div className='py-5 px-5'>
            {MapContainer && TileLayer && Marker && Popup && (
                <MapContainer center={position} zoom={13} style={{ height: '250px', width: '250px' }} scrollWheelZoom={false}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={position}>
                        <Popup>We are here!</Popup>
                    </Marker>
                </MapContainer>
            )}
        </div>
    );
};

export default Map;
