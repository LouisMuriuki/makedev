import React from 'react'

function question({ Data }) {
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
                      <span></span>
                    </div>
                    <div className="content">
                      <p>{question.details}</p>
                    </div>
                    <button>Answer</button>
                    <div className="answer">
                      <div className="container">
                        <textarea></textarea>
                        <button>Post Answer</button>
                      </div>
                    </div>
                  </div>

                </div>))}
            </>
          ))}
        </>
      ))}
    </>


  )
}

export default question