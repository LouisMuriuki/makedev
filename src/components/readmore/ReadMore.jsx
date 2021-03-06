import React, { useState } from 'react'
import './readmore.scss'

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    
        return (
            <p className='readmore'>
                {isReadMore ? text.slice(0, 150) : text}
                <span onClick={toggleReadMore} className="readmoretoggle">
                    {isReadMore ? "...read more" : " show less"}
                </span>
            </p>
        )
    
}

export default ReadMore;