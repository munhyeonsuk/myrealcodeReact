import React from 'react'
import Eventcard from './event/Eventcard'
import esthercss from './scss/est.module.scss'

function EventE() {
    return (
        <section className={esthercss.eventE}>
        <div className={`${esthercss.containerE} container-1400 py-5`} >
            <div className={`d-xl-flex align-items-strech ${esthercss.beforeRoundE}`}>
                <div className={`${esthercss.titleAreaE} flex-grow-1 position-relative me-sm-3`}>
                    <div className="p-sm-5 px-3 py-3">
                        <h3 className="mb-sm-3 mb-1">Event</h3>
                        <p className={esthercss.titletextres}>마이리얼트립에서는<br />
                                    <span>발걸음마다 새로운<br />
                                    경주</span>가 펼쳐집니다!
                        </p>
                        <a href="" className='d-flex justify-content-end justify-content-sm-start'><strong className={`${esthercss.LearnMoreE} align-items-center`}>자세히보기</strong></a>
                    </div>
            </div>
                <Eventcard></Eventcard> 
               
            </div>
        </div>
      </section>

    )
}

export default EventE
