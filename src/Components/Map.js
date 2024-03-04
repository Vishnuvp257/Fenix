import React from 'react';

const Map = () => {
    return (
        <div className='mapContainer'>
            <iframe 
                title='map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.2240850886866!2d78.74147301566887!3d10.657420097326817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa89314eafebeb%3A0xc6e95a591550e2f0!2sAnna%20University%2C%20Main%20Entrance%2C%20West!5e0!3m2!1sen!2sin!4v1709558893518!5m2!1sen!2sin" 
                width="10000" 
                height="450" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}

export default Map;