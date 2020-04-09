import React from 'react';

import GooglePlayImage from '../../assets/images/googlePlay.png'

const Footer = (props) => {

    return (
        <footer className={props.isLoaded? "footer footer__loaded" : "footer"}>
            <div className="footer__downloadApp">
                <p>You can also download the app for Android!</p>
                <a href="https://play.google.com/store/apps/details?id=com.pavanela.flag_finder">
                    <img
                        className="footer__downloadApp--img"
                        src={GooglePlayImage}
                        alt="Download-Flag-Finder-on-Google-Play"
                    />
                </a>
            </div>
            <div class="footer__pavanela">
                <a href="https://pavanela.com" target="_blank" class="footer__copyright" >&copy;Pavanela</a>
            </div>
        </footer>
    )
}

export default Footer