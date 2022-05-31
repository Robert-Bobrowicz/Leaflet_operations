import './App.css';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

function App() {
    const mapInitialCoordinates = [52.231140, 21.004146];

  return (
    <div className="App">
        Leaflet map operations
        <MapContainer center={mapInitialCoordinates} zoom={15} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={mapInitialCoordinates}>
                <Popup>
                    <h4>Marker text</h4> <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    </div>
  );
}

export default App;
