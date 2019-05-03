import React from 'react';
import Title from '../../../title';
import './constitution.css';

import mcmConstitution from '../../../../static/mcm_constitution.pdf';

const Constitution = () => (
    <div className='constitution-page'>
        <Title width={360} title="Constitution" />
        <div className='wide-constitution-pdf'>
            <embed src={mcmConstitution} type="application/pdf" width="600" height="820px" page="7" scrollbar="1" toolbar="1" />
        </div>
        <div className='narrow-constitution-pdf'>
            <embed src={mcmConstitution} type="application/pdf" width="360" height="820px" page="7" scrollbar="1" toolbar="1" />
        </div>
    </div>
)

export default Constitution;