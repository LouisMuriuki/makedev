import React from 'react'
import './space.scss'

function Space({ Data, setEnrolled }) {
   
    return (
        <>
            <div className='createspace'>
                <h3>Create a space and invite your community to join</h3>
                <button>CreateSpace</button>
            </div>
            <h2>Available Spaces:</h2>
            {Data && Data.map(spaces => (
                <div className="top" >
                    {spaces.space && spaces.space.map(Space => (
                        
                            <div className="space">
                                <div className="container">
                                    <div className="title">
                                        <p>{Space.title}</p>
                                    </div>
                                    <div className='info'>
                                        <p><b>Members:{Space.joined} </b></p>
                                        <button onClick={() => { setEnrolled(prev => [...prev, Space.title]) }}>Join</button>
                                    </div>
                                </div>
                            
                        </div>)
                    )}

                </div>)
            )}
        </>

    )
}

export default Space