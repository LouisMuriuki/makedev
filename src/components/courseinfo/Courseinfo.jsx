import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ClassIcon from '@mui/icons-material/Class';
import CategoryIcon from '@mui/icons-material/Category';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import "./courseinfo.scss"
function Courseinfo({ Data, coursename }) {
  return (
    <>

      {console.log(coursename)}
      {Data && Data.map(course => (
        <>
          {course.courses && course.courses.filter(language => language.title.includes(coursename)).map(language => (
            <div className="courseinfo" key={language.id}>
              {console.log(language.difficulty)}
              <div className="top">
                <div className="instructor">
                  <PersonIcon />
                  <p><b>Instructor: </b>{language.instructor}</p>
                </div>
                <div className="community">
                  <p><ClassIcon /><b>Community: </b>{language.community}</p>
                </div>
                <div className="type">
                  <CategoryIcon />
                  <p><b>Type </b>{language.type}</p>
                </div>
              </div>
              <div className="mid">
                <div className="title">
                  <h4> {language.title}</h4>
                </div>
              </div>
              <div className='bottom'>
                <div className="lessons">
                  <CastForEducationIcon />
                  <p><b>Lessons: </b>{language.lessons}</p>
                </div>
                <div className="difficuly">
                  <p><b>Difficulty: </b>{language.difficulty}</p>
                </div>
              </div>

            </div>
          )

          )}

        </>)
      )}
    </>
    // <div className="courseinfo">

    // </div>
  )
}

export default Courseinfo