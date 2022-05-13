import { createContext, useState, useEffect } from "react";


const CourseContext = createContext()
export function CourseProvider({ children }) {
  const [enrolled, setEnrolled] = useState(JSON.parse(localStorage.getItem("enrolledcourse")) || [])
  useEffect(() => {

    localStorage.setItem("enrolledcourse", JSON.stringify(enrolled))

  }, [enrolled])

  const [link, setLink] = useState(JSON.parse(localStorage.getItem("courselink")) || [])
  useEffect(() => {

    localStorage.setItem("courselink", JSON.stringify(link))

  }, [link])

  return (
    <CourseContext.Provider value={{ enrolled, setEnrolled, link, setLink }}>{children}</CourseContext.Provider>
  )
}

export default CourseContext