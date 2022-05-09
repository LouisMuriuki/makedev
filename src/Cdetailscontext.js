import { createContext,useState } from 'react'
const CdetailsContext = createContext()

export function CdetailsProvider({ children }) {
    const[overview,setOverview]=useState(true)
    const[curriculum,setCurriculum]=useState(false)
    const[instructor,setInstructor]=useState(false)
    const[review,setReviews]=useState(false)

    const overviewClick=()=>{
        setOverview(true)
        setReviews(false)
        setInstructor(false)
        setCurriculum(false)
    }
    const curriculumClick=()=>{
        setOverview(false)
        setReviews(false)
        setInstructor(false)
        setCurriculum(true) 
    }
    const instructorClick=()=>{
        setOverview(false)
        setReviews(false)
        setInstructor(true)
        setCurriculum(false)
    }
    const reviewClick=()=>{
        setOverview(false)
        setReviews(true)
        setInstructor(false)
        setCurriculum(false)
    }
        return (
        <CdetailsContext.Provider value={{overview,curriculum,instructor,review,overviewClick,curriculumClick,instructorClick,reviewClick}}>{children}</CdetailsContext.Provider>
    )

}

export default CdetailsContext