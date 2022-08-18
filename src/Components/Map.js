import React from 'react'

const Map = () => {
    return (
        <div className='google-map-code'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465132.60895358864!2d54.27842838424662!3d24.386572911004457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1654898071340!5m2!1sen!2sin" 
            width="1070" height="540" style={{border:"0"}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
        </div>
    )
}

export default Map;