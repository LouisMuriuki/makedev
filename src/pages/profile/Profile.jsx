import React from 'react'
import {motion} from "framer-motion"

function Profile() {
  return (
    <motion.div className='profile'
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}>
        
    </motion.div>
  )
}

export default Profile