import React, { useEffect, useState } from 'react'

function Posts({ Post, communitynames }) {
    const [all, setAll] = useState()


    useEffect(() => {
        fetch('http://localhost:8000/Community').then(res => {
            return res.json()
        }).then(data => {
            console.log(data.posts)
            setAll(data)
        })

    }, [])
    return (
        <>
            {all && all.map(post => (
                <>
                    {post.posts && post.posts.map(p => (
                        <div className='posts'>
                            {p.generalpost && p.generalpost.map(general => (
                                <>
                                    {console.log(general.details)}
                                    <div claasName="image">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="title">
                                        <h4>{general.title}</h4>
                                    </div>
                                    <div className="user">
                                        <span>{general.by}</span>
                                    </div>
                                    <div className="postdetails">
                                        <p>{general.details}</p>
                                    </div>
                                    <div className="icons">

                                    </div>
                                </>))}
                        </div>
                    ))}
                </>
            ))}
        </>

    )
}

export default Posts