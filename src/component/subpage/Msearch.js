import React from 'react'
import msscss from '../scss/mhs.module.scss'
import Hdpopular from '../hd/Hdpopular';

import search from '../../img/hdSearch.svg'
import close from '../../img/hdClose.svg'

function Msearch() {
    return (
        <section className={msscss.msearch}>
            <div className='d-flex '>
                <div className={`${msscss.msearchbox} d-flex align-items-center p-1`}>
                    <img src={search} alt="" className='ms-2 me-2' />
                    <input type="text" placeholder='검색'/>
                    <button><img src={close} alt="" className='me-2' /></button>
                </div>
            </div>
            <p className={`pt-2 mb-1 text-black-50`}>실시간인기</p>
                                    <div className='d-flex'>
                                        <div>
                                          <Hdpopular />
                                        </div>
                                    </div>
        </section>
    )
}

export default Msearch
