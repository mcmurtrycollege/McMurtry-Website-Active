import React from 'react';
import Title from '../../../title';
import './parking-bylaws.css';

import parkingBylaws from '../../../../static/mcm_parking_bylaws.pdf';


const ParkingBylaws = () => (
    <div className='parking-bylaws-page'>
        <Title width={260} title="Parking Bylaws" />
        <div className='wide-parking-bylaws-pdf'>
            <embed src={parkingBylaws} type="application/pdf" width="600" height="820px" page="1" scrollbar="1" toolbar="1" />
        </div>
        <div className='narrow-parking-bylaws-pdf'>
            <embed src={parkingBylaws} type="application/pdf" width="360" height="820px" page="1" scrollbar="1" toolbar="1" />
        </div>
    </div>
)

export default ParkingBylaws;