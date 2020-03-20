import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import GooglePlayImage from '../assets/images/googlePlay.png'

const DownloadAndroid = () => {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <div className="DownloadApp" style={!isVisible ? { display: "none" } : null}>
            <FontAwesomeIcon className="DownloadApp__icon" icon={faWindowClose} onClick={() => setIsVisible(false)} />
            <div className="DownloadApp__container">
                <p className="DownloadApp__p">You can also download the App for mobile!</p>
                <a href="https://play.google.com/store/apps/details?id=com.pavanela.flag_finder">
                    <img
                        className="DownloadApp__img"
                        src={GooglePlayImage}
                        alt="Download-Flag-Finder-on-Google-Play"
                    />
                </a>
            </div>
        </div>
    );
}

export default DownloadAndroid;