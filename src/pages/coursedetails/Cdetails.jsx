import React, { useState, useEffect } from 'react'
import Courseinfo from '../../components/courseinfo/Courseinfo'
import Miniheader from '../../components/header/Miniheader'
import Navbar from '../../components/navbar/Navbar'
import Projects from '../../components/projects/Projects'
import { useParams } from 'react-router-dom'
import {motion} from "framer-motion"
import './cdetails.scss'

function Cdetails() {
    let params=useParams()
    const [info, setInfo] = useState(true)
    const [projects, SetProjects] = useState(false)

    
    const [all, setAll] = useState()

    


    useEffect(() => {
        fetch('http://localhost:8000/Community').then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
            setAll(data)
        })

    }, [])
    return (
        <motion.div className='cdetails'
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:0.5}}>
            <Navbar/>

            <Miniheader setInfo={setInfo} setProjects={SetProjects} />
            <div className="data">
                {info && <Courseinfo Data={all} coursename={params.coursename} />}
                {projects && <Projects Data={all} coursename={params.coursename} />}

            </div>
        </motion.div>
    )
}

export default Cdetails