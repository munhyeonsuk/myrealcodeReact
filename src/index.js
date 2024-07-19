import React from 'react';
import ReactDOM from 'react-dom/client';
import{ Routes, Route, BrowserRouter} from 'react-router-dom'

import './css/fontstyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/scss/common.scss';

import 'swiper/css';

import Mrc from './Mrcmain';
import Hd from './component/Hd'
import Ft from './component/Ft'
import Quick from './component/Quick';
import Pageprepare from './component/subpage/Pageprepare';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Hd />
        <Routes>
            <Route path="/" element={<Mrc />} />
            <Route path='*' element={<Pageprepare />} />
        </Routes>
        
        <Quick />
        <Ft />
    </BrowserRouter>
);
