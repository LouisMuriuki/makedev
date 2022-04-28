import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Articles from '../../components/articles/Articles'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Posts from '../../components/posts/Posts'
import Question from '../../components/question/Question'
import './details.scss'

function Details() {
    let params=useParams()
    const[posts,setPosts]=useState(true)
    const[questions,setQuestions]=useState(false)
    const[projects,setProjects]=useState(false)

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
    <div className='details'>
        <Navbar/>
        <Header setPosts={setPosts} setQuestions={setQuestions} setProjects={setProjects}/>
        <div className="data">
        {posts && <Posts Data={all} communitynames={params} />}
        {questions && <Question Data={all} communitynames={params}/>}
        </div>
    </div>
  )
}

export default Details