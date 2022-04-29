import React, { useEffect, useState } from 'react'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import ReadMore from '../../components/readmore/ReadMore'
import './articles.scss'
import {motion} from "framer-motion"
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
        <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
            
            <Navbar />
            <Hero title="Find all articles below"  />
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
                                        <p><ReadMore>{article.body}</ReadMore></p>
                                    </div>
                                    {console.log(article.id)}
                                </div>

                            ))}
                        </>
                    ))}
                </>
            ))}
        </motion.div>

    )
}

export default Articles