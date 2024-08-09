import React from 'react';
import ReactDOM from 'react-dom/client';
import{ Routes, Route, BrowserRouter} from 'react-router-dom'

import './css/fontstyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/scss/common.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/controller';

import Hd from './component/Hd'
import Mrc from './Mrcmain';
import Ft from './component/Ft'
import Quick from './component/Quick';
import Pageprepare from './component/subpage/Pageprepare';
import Popupform from './component/Popupform'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>    
        <Hd />
        <Routes>
            <Route path="/" element={
            <>  <Mrc /><Quick /> </>} />
            <Route path="/faq" element={<Popupform onOpen={true} onClose={false} />} />
            <Route path="*" element={<Pageprepare />} />
        </Routes>
        
      
        <Ft />
    </BrowserRouter>
);
