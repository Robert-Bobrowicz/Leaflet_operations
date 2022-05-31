import './App.css';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMap, useMapEvents} from 'react-leaflet'
import attractions from './data/attractions.json';

function App() {
    const mapInitialCoordinates = [52.231140, 21.004146];

    function CenterMap(feature, layer) {
        const map = useMap();
        useMapEvents({
            click(event) {
                console.log(event);
                map.flyTo(event.latlng, 16, {duration: 3} );
            }
        })
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
        }
    }

  return (
    <div className="App">
        <div className='title'>
            <div className='title_semi_bold'>Leaflet map selected operations</div>
            <div>CLick anywhere on a map to center a map on it position and zoom it</div>
            <div>Click on the icon to see name of attraction</div>
        </div>
        <MapContainer center={mapInitialCoordinates} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={mapInitialCoordinates}>
                <Popup>
                    <h4>You are here</h4> <br /> Close to center of Warsaw.
                </Popup>
            </Marker>
            <GeoJSON data={attractions.features} onEachFeature={CenterMap} />
            <CenterMap />
        </MapContainer>
    </div>
  );
}

export default App;
