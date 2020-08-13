import * as React from 'react'
import { Component, PureComponent } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'



//react-map=gl is a module that I didn't have time to fiddle with converting from class library
class Map extends Component {
  state = {
    viewport: {
      width: '100vw',
      height: '100vh',
      latitude: -12.03,
      longitude: -77.02,
      zoom: 13
      
    }
  };
  
  render() {
    return (
      <div>
        <div>
          {console.log(process.env.NEXT_PUBLIC_MAPBOX_API_KEY)}
        </div>
        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken={`${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`}
          onViewportChange={(viewport) => this.setState({ viewport })}
          {...this.state.viewport}
          >
          <Marker latitude={-12.03} longitude={-77.02}>
          <div>You are here</div>
        </Marker>
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;