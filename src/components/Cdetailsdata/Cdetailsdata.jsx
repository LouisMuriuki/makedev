import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import LockIcon from '@mui/icons-material/Lock';
import ArticleIcon from '@mui/icons-material/Article';
import "./cdetailsdata.scss"
function Cdetailsdata({ Data, coursename }) {
    return (
        <div className="cdetailsdata">
            <div className="overview">
                {Data && Data.map(course => (
                    <>
                        {course.courses && course.courses.filter(language => language.title.includes(coursename)).map(language => (
                            <div className="text" key={language.id}>
                                <p>{language.overview}</p>
                            </div>)
                        )}
                    </>))}
            </div>
            <div className='curriculum'>
                <h1>Lessons</h1>
                <div className="lessons">
                   <div className="piece">
                       <div className='left'>
                            <p><ArticleIcon/> Lesson 1</p>
                       </div>
                       <div className='right'>    
                       <DoneIcon />  
                       </div>
                   </div>
                   <div className="piece">
                       <div className='left'>
                            <p><ArticleIcon/> Lesson 2</p>
                       </div>
                       <div className='right'>
                       <LockIcon/>      
                       </div>
                   </div>
                   <div className="piece">
                       <div className='left'>
                            <p><ArticleIcon/> Lesson 3</p>
                       </div>
                       <div className='right'>  
                       <LockIcon/>    
                       </div>
                   </div>
                   <div className="piece">
                       <div className='left'>
                            <p><ArticleIcon/> Lesson 4</p>
                       </div>
                       <div className='right'> 
                       <LockIcon/>     
                       </div>
                   </div>
                   <div className="piece">
                       <div className='left'>
                            <p><ArticleIcon/> Lesson 5</p>
                       </div>
                       <div className='right'> 
                       <LockIcon/>     
                       </div>
                   </div>
                   <div className="piece">
                       <div className='left'>
                            <p><ArticleIcon/> Lesson 6</p>
                       </div>
                       <div className='right'> 
                       <LockIcon/>     
                       </div>
                   </div>
                </div>
            </div>
            <div className="instructor">
                {Data && Data.map(course => (
                    <>
                        {course.courses && course.courses.filter(language => language.title.includes(coursename)).map(language => (
                            <div className="text" key={language.id}>
                                <p>{language.instructor}</p>
                            </div>
                        ))}
                    </>))}
            </div>

        </div>
    )
}

export default Cdetailsdata