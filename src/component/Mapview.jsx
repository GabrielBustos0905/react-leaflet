import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Popup } from "react-leaflet";
import 'leaflet/dist/Leaflet.css';

const Mapview = () => {
    const position = [51.505, -0.09]
    return (
        <MapContainer center={position} zoom={5} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    <p>Inglaterra</p>
                </Popup>
            </Marker>
        </MapContainer>
    )
};

export default Mapview;