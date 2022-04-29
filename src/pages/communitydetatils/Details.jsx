import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Posts from '../../components/posts/Posts'
import Question from '../../components/question/Question'
import Space from '../../components/space/Space'
import './details.scss'
import {motion} from "framer-motion"

function Details() {
    let params=useParams()
    const[posts,setPosts]=useState(true)
    const[questions,setQuestions]=useState(false)
    const[spaces,setSpaces]=useState(false)

    const[all,setAll]=useState()
     
    
  useEffect(() => {
    fetch('http://localhost:8000/Community').then(res => {
      return res.json()
    }).then(data => {
console.log(data)
setAll(data)
    })

  }, [])
  return (
    <motion.div className='details'
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
        <Navbar/>
        <Header setPosts={setPosts} setQuestions={setQuestions} setSpaces={setSpaces}/>
        <div className="data">
        {posts && <Posts Data={all} communitynames={params} />}
        {questions && <Question Data={all} communitynames={params}/>}
        {spaces && <Space Data={all} communitynames={params}/>}
        </div>
    </motion.div>
  )
}

export default Details