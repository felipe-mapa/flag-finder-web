import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const Map = (props) => {
    return (
        <Map 
            google={window.google}
            style={{ height: '100%', width: '100%' }}
            initialCenter={{
                lat: props.lat,
                lng: props.lng
            }}
            zoom={15}
        >
            {/* <Marker name={props.name} /> */}
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDTIiWYtQ1l3Jale-eHFnRwDQEKdmnnooM')
})(MapContainer)