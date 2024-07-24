import React from 'react'
import { Link } from 'react-router-dom'

function Slide(props) {
    return (
        <div className="recommendSlideItemS">
            <Link to={props.href}>
                <div className="recommendSlideItemInnerS">
                    <img src={props.src} alt={props.alt} />
                </div>
                <p>{props.text1}<br />{props.text2}</p>
            </Link>
        </div>   
    )
}

export default Slide
