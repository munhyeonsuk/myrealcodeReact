import React from 'react';
import ReactDOM from 'react-dom/client';


import './css/fontstyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/scss/common.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Mrc from './Mrcmain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Mrc />
 
);
