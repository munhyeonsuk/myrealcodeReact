import React from 'react'
import Eventcard from './event/Eventcard'
import esthercss from './scss/est.module.scss'

function EventE() {
    return (
        <section className={esthercss.eventE}>
        <div className={`${esthercss.containerE} container-1400 py-5`} >
            <div className={`d-xl-flex align-items-strech ${esthercss.beforeRoundE}`}>
                <div className={`${esthercss.titleAreaE} flex-grow-1 position-relative me-3`}>
                    <div className="p-5">
                        <h3 className="mb-3">Event</h3>
                        <p className="">마이리얼트립에서는<br />
                                    발걸음마다 새로운<br />
                                    경주가 펼쳐집니다!
                        </p>
                        <a href=""><strong className={`${esthercss.LearnMoreE} align-items-center`}>자세히보기</strong></a>
                    </div>
            </div>
                <Eventcard></Eventcard> 
               
            </div>
        </div>
      </section>

    )
}

export default EventE
