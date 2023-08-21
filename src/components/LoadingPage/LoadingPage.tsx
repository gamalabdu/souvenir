import React from 'react'
import {motion} from 'framer-motion'
import './styles.css'
import Counter from './Counter/Counter'

interface LoadingPage {
	setLoading : Function
}

const LoadingPage = (props : LoadingPage) => {

	const { setLoading } = props

	const fadeOut = {
		hidden: {
	        y: 0,
		},
		show : {
			y: 0,
			transition: {
				ease : 'easeInOut',
				duration: 3,
			}
		},
		exit : {
			opacity: 0,
			y: -200,
			transition : {
				ease : 'easeInOut',
				duration: .9,
			}
		}
	}


	return (
		<motion.div className='loading-container'
		layoutId='home'
		variants={fadeOut}
		initial= 'hidden'
		animate = 'show'
		exit= 'exit'
		onAnimationComplete={ () => setLoading(true)}
		>
			<Counter value={100} /> { "%"}
		</motion.div>
	)
}

export default LoadingPage
