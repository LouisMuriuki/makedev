import React, { useState } from 'react'
import './question.scss'


function Question({ Data }) {

  const[answer,setAnswer]=useState(false)
  return (
    <>
      {Data && Data.map(post => (
        <>
          {post.posts && post.posts.map(p => (
            <>
              {p.question && p.question.map(question => (
                <div className='question'>
                  <div className="container">
                    <div className="top">
                      <h4>{question.title}</h4>
                      <span>by:{question.by}</span>
                    </div>
                    <div className="content">
                      <p>{question.details}</p>
                    </div>
                  </div>
                  {<button onClick={()=>setAnswer(prev=>!prev)}>Click to Answer</button>}
                  {answer && <div className="answer">
                    <div className="container">
                      <textarea></textarea>
                      <button onClick={()=>setAnswer(false)}>Post Answer</button>
                    </div>
                  </div>}


                </div>))}
            </>
          ))}
        </>
      ))}
    </>


  )
}

export default Question