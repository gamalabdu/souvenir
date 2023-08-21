import React from 'react'
import postCard from '../../assets/images/souvenir-postcard.png'
import {motion} from 'framer-motion'
import './styles.css'

const About = () => {

  const fadeOut = {
		hidden: {
          opacity: 0,
	        y: 200,
		},
		show : {
      opacity: 1,
			y: 0,
			transition: {
				ease : 'easeInOut',
				duration: 1.6,
			}
		},
		exit : {
      opacity: 0,
			y: -200,
			transition : {
				ease : 'easeInOut',
				duration: 1.6,
			}
		}
	} 

  return (


		<motion.body className='about-container'
    initial="hidden"
    animate='show'
    exit='exit'
    variants={fadeOut}
    >

      <div className='about-inner'>

			<img src={postCard} className='postcard' />

			<div className='lower-info'>

				<div className='info'>
          Min Soo Park 
          <br/>
          director 
          <br/>
          minsoo@souvenir.media
        </div>

				<div className='info'>
          Ted Kim 
          <br/>
          producer/director 
          <br/>
          ted@souvenir.media
        </div>

			</div>



      </div>

		</motion.body>
	)
}

export default About