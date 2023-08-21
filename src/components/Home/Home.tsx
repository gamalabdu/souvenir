
import React, { useEffect, useState } from 'react'
import {AnimatePresence, AnimateSharedLayout, motion} from 'framer-motion'
import './styles.css'
import { redirect, useNavigate } from 'react-router'
import LoadingPage from '../LoadingPage/LoadingPage'
import scrollRight from '../../assets/icons/scroll-mouse.svg'
import { Link } from 'react-router-dom'

const Home = () => {


	const workVideos = [
		{
			link: 'https://drive.google.com/uc?id=17tY0xA8tNO8UXs6CeKVu-Ptq64EjxHmQ'
		},
		{
			link: 'https://drive.google.com/uc?id=1ZURiSft8tNXREk_mXg_2fPqiQuI9y896'
		},
		{
			link: 'https://drive.google.com/uc?id=18t52E5G_R6obctl49RgGcql6KdnuoP0x'
		},
		{
			link: 'https://drive.google.com/uc?id=1PgBzYSXMU8KDQEij1OF4g1uqLd4GHrKw'
		},
		{
			link: 'https://drive.google.com/uc?id=1axprrekHXCR37zxbzWCkc5uGbL2pedg1'
		},
		{
			link: 'https://drive.google.com/uc?id=1bF0rKGk5U9k-QnkWmPMFDbpZvbdXIcT8'
		}
		
	]

	const navigate = useNavigate()


	const goTo = () => {
		navigate('/ahn')
	}


    const [scrollPercentage, setScrollPercentage] = useState(0);

    
	useEffect(() => {

		const track = document.getElementById('image-track') as HTMLElement

		if (track) {

		let touchStartX = 0

		const handleOnDown = (e: MouseEvent | TouchEvent) => {
			const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
			touchStartX = clientX
			track.dataset.mouseDownAt = clientX.toString()
		}

		const handleOnUp = () => {
			track.dataset.mouseDownAt = '0'
			track.dataset.prevPercentage = track.dataset.percentage
			touchStartX = 0
		}

		const handleOnMove = (e: MouseEvent | TouchEvent) => {
			if (track.dataset.mouseDownAt === '0' && touchStartX === 0) return

			const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
			const deltaX = touchStartX - clientX
			touchStartX = clientX

			const mouseDelta = parseFloat(track.dataset.mouseDownAt || '0') - clientX
			const maxDelta = window.innerWidth / 2

			const percentage = (mouseDelta / maxDelta) * -50
			const nextPercentageUnconstrained =
				parseFloat(track.dataset.prevPercentage || '0') + percentage
			const nextPercentage = Math.max(
				Math.min(nextPercentageUnconstrained, 0),
				-100
			)

            setScrollPercentage(nextPercentage);

			track.dataset.percentage = nextPercentage.toString()

			track.animate(
				{
					transform: `translate(${nextPercentage}%, -50%)`,
				},
				{ duration: 1500, fill: 'forwards' }
			)

			track.style.transform = `translate(${nextPercentage}%, -50%)`

			const images = Array.from(
				track.getElementsByClassName('image')
			) as HTMLElement[]

			for (const image of images) {
				image.animate(
					{
						objectPosition: `${100 + nextPercentage}% center`,
					},
					{ duration: 1500, fill: 'forwards' }
				)
			}
            
		}

		window.addEventListener('mousedown', handleOnDown)
		window.addEventListener('touchstart', handleOnDown)

		window.addEventListener('mouseup', handleOnUp)
		window.addEventListener('touchend', handleOnUp)

		window.addEventListener('mousemove', handleOnMove)
		window.addEventListener('touchmove', handleOnMove)

		return () => {
			window.removeEventListener('mousedown', handleOnDown)
			window.removeEventListener('touchstart', handleOnDown)

			window.removeEventListener('mouseup', handleOnUp)
			window.removeEventListener('touchend', handleOnUp)

			window.removeEventListener('mousemove', handleOnMove)
			window.removeEventListener('touchmove', handleOnMove)
		}


	  }


	}, [scrollPercentage])


	const handleTouchpadScroll = (e: WheelEvent) => {

		e.preventDefault()
		const scrollAmount = e.deltaX // Use deltaX for horizontal scrolling
		const maxDelta = window.innerWidth / 2
		const sensitivity = 0.2 // Adjust this value to control scrolling speed

		const percentage = (scrollAmount / maxDelta) * 100 * sensitivity

		const track = document.getElementById('image-track') as HTMLElement
		const prevPercentage = parseFloat(track.dataset.prevPercentage || '0')
		const nextPercentageUnconstrained = prevPercentage + percentage

		// Ensure that the new scroll position does not go beyond the original position
		const nextPercentage = Math.min(
			Math.max(nextPercentageUnconstrained, -100),
			0
		) // Allow values between -100 and 0

        setScrollPercentage(nextPercentage);

		track.dataset.prevPercentage = nextPercentage.toString() // Update prevPercentage here

		track.animate(
			{
				transform: `translate(${nextPercentage}%, -50%)`,
			},
			{
				duration: 1500,
				easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
				fill: 'forwards',
			}
		)

		const images = Array.from(
			track.getElementsByClassName('image')
		) as HTMLElement[]

		for (const image of images) {
			image.animate(
				{
					objectPosition: `${100 + nextPercentage}% center`,
				},
				{
					duration: 1500,
					easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
					fill: 'forwards',
				}
			)
		}

	}

	useEffect(() => {
		window.addEventListener('wheel', handleTouchpadScroll, { passive: false })

		return () => {
			window.removeEventListener('wheel', handleTouchpadScroll)
		}
	}, [scrollPercentage])


    const handleVideoHover = (e: React.MouseEvent<HTMLVideoElement>) => {
        const video = e.target as HTMLVideoElement;
    
        if (video.paused) {
          video.play();
        }
      };
    
    const handleVideoLeave = (e: React.MouseEvent<HTMLVideoElement>) => {
        const video = e.target as HTMLVideoElement;
    
		if (!video.paused) {
        setTimeout(() => {
            video.pause();
        }, 300);
	    }
        //video.currentTime = 0;
      };
	

	const [loading, setLoading] = useState(false); 

	const transition = { 
		duration : 2, 
		ease:[0.43,0.13,0.23,0.96],
		staggerChildren: 1,
	}

	const videoItem = {
			hidden: {
				opacity: 0,
				y: 200,
			},
			show : {
				opacity: 1,
				y: 0,
				transition :{ 
					duration : 2, 
					ease:[0.43,0.13,0.23,0.96],
					staggerChildren: 1,
				}
			},
			exit: {
				opacity: 0,
				y: -200
			},
	}


	return (

	<AnimatePresence>
	{

		!loading ? 

		<LoadingPage setLoading={setLoading}/>

		:

		<motion.body className='home-container'
		key={'home-container'}
		initial={{opacity: 0}}
		animate={{ opacity : 1}}
		exit={{ opacity: 0}}
		transition={{
			duration: 1,
			delay: 1,
			ease:[0.43,0.13,0.23,0.96],
		    staggerChildren: 0.1,
		}}
		>

        <motion.div className={ scrollPercentage >= -10 ? 'first-desc' : 'first-desc-hidden'}
		key={'work-info'}
		initial='hidden'
		animate='show'
		exit='exit'
		>
          

			Souviner is a full-service production company based in NYC.
			<br/>
			<br/>
			We specialize in short form content such as commercials, music videos and creative shorts.
			<br/>
			<br/>
			Explore & Enjoy - Souviner Team

			{/* <img className='scroll-icon' src={scrollRight} /> */}

		  
        </motion.div>



			<div id='image-track' data-mouse-down-at='0' data-prev-percentage='0'>

             {

				workVideos.map((video,idx) => {
					return (
					
					
						// <Link to='/ahn' style={{ textDecoration:"inherit", color:"inherit", height:"inherit", width:"inherit" }}>
							<motion.video
								key={idx}
								initial='hidden'
								animate='show'
								exit='exit'
								variants={videoItem}
								transition={transition}
								className='image'
								src={video.link}
								// draggable={false}
								loop={true}
								preload='auto'
								placeholder='../../assets/images/ahnposter.png'
								muted
								onMouseEnter={handleVideoHover}
								onMouseLeave={handleVideoLeave}
								onClick={ () => goTo() }
							/>
						// </Link>
					
					)
				})

			 }   

			 </div>

		<motion.div className='bottom' 
		    key='bottom'
			exit={{ opacity : 0}}
			transition={transition}
		>
		  <img className='scroll-icon' src={scrollRight} />

		</motion.div>

		</motion.body>

      }
		</AnimatePresence>	
	)
}

export default Home