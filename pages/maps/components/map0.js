import * as React from 'react'
import { Component } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'


const places = [{
  name: "Eat and Drink",
  lat: -11.98938,
  lon: -77.08634
}, {
  name: "Basilica y Convento de San Francisco do Lima",
  lat: -12.052660,
  lon: -77033030
}, {
  name: "Larco Museum",
  lat: -12.072400,
  lon: -77.066000
}, {
  name: "Park of the Reserve",
  lat: -12.036910,
  lon: -77.091320
}, {
  name: "Bus to Macchu Picchu",
  lat: -12.089730,
  lon: -77.016160
}
]


class Map extends Component {
  state = {
    viewport: {
      width: '100vw',
      height: '100vh',
      latitude: -12.10,
      longitude: -77.06,
      zoom: 11
    }
  };
 
  render() {
    return (
      <div>
        <div>
        </div>
        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken={`${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`}
          onViewportChange={(viewport) => this.setState({ viewport })}
          {...this.state.viewport}
          >
          <div className="PlacesList">
            {
            Object.keys(places).map((p, i) => {
              console.log(places[p].lat);
              return <div className="MarkerDiv">
                <Marker latitude={places[p].lat} longitude={places[p].lon}>{places[p].name}</Marker>
              </div>
            })
          }
          </div>
          {/* <Marker latitude={-12.03} longitude={-77.02}>
          <div>You are here</div>
        </Marker> */}
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;