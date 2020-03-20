import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = (props) => {
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

// if (isNaN(countryDetails[0].latitude) || isNaN(countryDetails[0].longitude)) {
//     flagMap = null
// } else {
//     flagMap = (
//         <div style={{ height: '100vh', width: '100%' }}>
//             <MapContainer
//                 lat={countryDetails[0].latitude}
//                 lng={countryDetails[0].longitude}
//                 name={countryDetails[0].title}
//             />
//         </div>
//     )
// }