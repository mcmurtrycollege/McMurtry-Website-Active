import React from 'react';
import Title from '../../../title';
import './housing-bylaws.css';

import housingBylaws from '../../../../static/mcm_housing_bylaws.pdf';

const HousingBylaws = () => (
    <div className='housing-bylaws-page'>
        <Title width={260} title="Housing Bylaws" />
        <div className='wide-housing-bylaws-pdf'>
            <embed src={housingBylaws} type="application/pdf" width="600" height="820px" page="8" scrollbar="1" toolbar="1" />
        </div>
        <div className='narrow-housing-bylaws-pdf'>
            <embed src={housingBylaws} type="application/pdf" width="360" height="820px" page="8" scrollbar="1" toolbar="1" />
        </div>
    </div>
)

export default HousingBylaws;