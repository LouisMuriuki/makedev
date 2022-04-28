import React, { useEffect, useState } from 'react'
import Hero from '../hero/Hero'
import Navbar from '../navbar/Navbar'
import './articles.scss'
function Articles() {
    const [blog, setBlog] = useState()

    useEffect(() => {
        fetch('http://localhost:8000/Community').then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
            setBlog(data)


        })

    }, [])
    return (
        <>
            <Navbar/>
            <Hero/>
            {blog && blog.map(data => (
                <>
                    {data.courses && data.courses.map(course => (
                        <>
                            {course.articles && course.articles.map(article => (
                                <div className='Articles'>
                                    <div className='title'>
                                        <h2>{article.title}</h2>
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