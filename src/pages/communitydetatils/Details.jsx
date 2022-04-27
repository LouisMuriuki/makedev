import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Articles from '../../components/articles/Articles'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Posts from '../../components/posts/Posts'
import Question from '../../components/question/Question'

function Details() {
    let params=useParams()
    const[posts,setPosts]=useState()
    const[questions,setQuestions]=useState()
    const[articles,setArticles]=useState()
    const[projects,setProjects]=useState()

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
        <Header/>
        <Articles Data={all}/>
        {/* <Posts Data={all} communitynames={params}/> */}
        <Question Data={all}/>
    </div>
  )
}

export default Details