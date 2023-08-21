import React from 'react'
import {animate, motion} from 'framer-motion'
import './styles.css'
import { Link } from 'react-router-dom'

const Enter = () => {

  const onExitPage = {
    initial : {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
    exit : {
      opacity: 0
    }

  }




  return (
    <motion.body className='landing-container'
    initial='initial'
    animate='show'
    exit='exit'
    >

     <motion.div className='enter-tag'
     initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      exit={{ opacity : 0}}
      transition={{ 
        ease: [0.17, 0.67, 0.83, 0.67],
        delay: 4,
      }}
     > 
     
     Souviner 
     
     
     <Link to='/home' style={{ textDecoration:"underline", backgroundColor:"transparent", color:"white", fontWeight:"lighter", fontSize:"3vw" }}>

       <div className='enter-button'>enter </div>

     </Link>
    
     
     </motion.div>

      <motion.video className='enter-video' src='https://drive.google.com/uc?id=1axprrekHXCR37zxbzWCkc5uGbL2pedg1'
      initial='initial'
      animate='show'
      transition={{ delay: 0.2 }}
      variants={onExitPage}
      loop={true}
      preload='auto'
      autoPlay
      muted
      />

    </motion.body>
  )
}

export default Enter