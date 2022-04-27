import React from 'react'

function Articles({ Data }) {
    return (
        <>
            {Data && Data.map(data => (
                <>
                    {data.courses && data.courses.map(course => (
                        <>
                            {course.articles && course.articles.map(article => (
                                <div className='Articles'>
                                    <div className='title'>
                                      <p>{article.title}</p>  
                                    </div>
                                    <div className='body'>
                                    <p>{article.body}</p>
                                    </div>

                                    {console.log(article.id)}
                                </div>
                            ))}
                        </>
                    ))}
                </>
            ))}
        </>

    )
}

export default Articles