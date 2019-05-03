import React from 'react';
import Title from '../../../title';
import './general-bylaws.css';

import genBylaws from '../../../../static/mcm_bylaws.pdf';

const GeneralBylaws = () => (
    <div className='general-bylaws-page'>
        <Title width={260} title="General Bylaws" />
        <div className='wide-general-bylaws-pdf'>
            <embed src={genBylaws} type="application/pdf" width="600" height="820px" page="8" scrollbar="1" toolbar="1" />
        </div>
        <div className='narrow-general-bylaws-pdf'>
            <embed src={genBylaws} type="application/pdf" width="360" height="820px" page="8" scrollbar="1" toolbar="1" />
        </div>
    </div>
)

export default GeneralBylaws;