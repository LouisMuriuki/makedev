import React from 'react'

function Posts({ Post, communitynames }) {
    return (
        <>
            {Post && Post.map(post => (
                <>
                    {post.posts && post.posts.map(p => (
                        <>
                            {p.generalpost && p.generalpost.map(general => (
                                <div className='posts'>
                                    {console.log(general.id)}
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


                                </div>
                            ))}
                        </>


                    ))}


                </>





            ))}
        </>

    )
}

export default Posts