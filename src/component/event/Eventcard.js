import React, { Fragment } from 'react'
import esthercss from '../scss/est.module.scss'
import eventdata from '../../json/eventdata.json'

function Eventcard() {
    
    return (
        <ul className={`${esthercss.eventListE} d-md-flex justify-content-between px-0 position-relative`}>
                     

                    {
                        eventdata.map(( eventdata, listnumber )=>{
                            return(
                                <li key={eventdata.id} className={`overflow-hidden  bg-white mx-4 px-0 ${
                                    listnumber === 0 ? esthercss.eventFirstE : 
                                    listnumber === 1 ? esthercss.eventSecondE :  
                                    ""
                                  } `} >
                                <a href={eventdata.linkHref} className={`d-block overflow-hidden ${esthercss.thumbImgE}`}><img src={eventdata.imageSrc} alt={eventdata.alt} className="d-block img-fluid" /></a>
                                <a href={eventdata.linkHref} className=" d-block ">
                                    <strong className={`${esthercss.textTitleE} d-block mb-3`}>{eventdata.title}</strong>
                                    <span className="d-block">{
                                    eventdata.description.split('|').map((v, i)=>{
                                        return(
                                            <Fragment key={i}>
                                              { i > 0 ? <br></br> : '' }
                                              {v}
                                            </Fragment>
                                        )
                                    })
                                    }
                                    </span>
                                    <i className={`${esthercss.eventArrowE} d-block`}>
                                        <svg className={`${esthercss.gray}`} width="42" height="30" viewBox="0 0 42 30" fill="none" >
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.015625 14.7044C0.015625 14.279 0.173585 13.871 0.454757 13.5702C0.735928 13.2694 1.11728 13.1004 1.51492 13.1004H36.8772L27.4406 3.00743C27.1591 2.70623 27.001 2.29771 27.001 1.87174C27.001 1.44577 27.1591 1.03725 27.4406 0.736045C27.7222 0.43484 28.104 0.265625 28.5021 0.265625C28.9003 0.265625 29.2821 0.43484 29.5636 0.736045L41.558 13.5687C41.6976 13.7178 41.8084 13.8948 41.8839 14.0896C41.9595 14.2845 41.9984 14.4934 41.9984 14.7044C41.9984 14.9154 41.9595 15.1244 41.8839 15.3192C41.8084 15.5141 41.6976 15.6911 41.558 15.8401L29.5636 28.6728C29.2821 28.974 28.9003 29.1433 28.5021 29.1433C28.104 29.1433 27.7222 28.974 27.4406 28.6728C27.1591 28.3716 27.001 27.9631 27.001 27.5371C27.001 27.1112 27.1591 26.7027 27.4406 26.4014L36.8772 16.3085H1.51492C1.11728 16.3085 0.735928 16.1395 0.454757 15.8387C0.173585 15.5379 0.015625 15.1299 0.015625 14.7044Z" fill="#989797"/>
                                       </svg>
                                       <svg className={`${esthercss.yellow}`} width="42" height="30" viewBox="0 0 42 30" fill="none" >
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.015625 14.7044C0.015625 14.279 0.173585 13.871 0.454757 13.5702C0.735928 13.2694 1.11728 13.1004 1.51492 13.1004H36.8772L27.4406 3.00743C27.1591 2.70623 27.001 2.29771 27.001 1.87174C27.001 1.44577 27.1591 1.03725 27.4406 0.736045C27.7222 0.43484 28.104 0.265625 28.5021 0.265625C28.9003 0.265625 29.2821 0.43484 29.5636 0.736045L41.558 13.5687C41.6976 13.7178 41.8084 13.8948 41.8839 14.0896C41.9595 14.2845 41.9984 14.4934 41.9984 14.7044C41.9984 14.9154 41.9595 15.1244 41.8839 15.3192C41.8084 15.5141 41.6976 15.6911 41.558 15.8401L29.5636 28.6728C29.2821 28.974 28.9003 29.1433 28.5021 29.1433C28.104 29.1433 27.7222 28.974 27.4406 28.6728C27.1591 28.3716 27.001 27.9631 27.001 27.5371C27.001 27.1112 27.1591 26.7027 27.4406 26.4014L36.8772 16.3085H1.51492C1.11728 16.3085 0.735928 16.1395 0.454757 15.8387C0.173585 15.5379 0.015625 15.1299 0.015625 14.7044Z" fill="#B2A569"/>
                                        </svg>
                                    </i>                            
                                </a>
                            </li>
                            )
                        })
                    }
                </ul>

    )
}

export default Eventcard
