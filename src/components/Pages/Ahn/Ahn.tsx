import React, { useState } from 'react'
import { FaInstagram } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandSpotify } from 'react-icons/tb'
import {motion} from 'framer-motion'
import './styles.css'

const Ahn = () => {

    const [videoLoaded, setVideoLoaded] = useState(false)

    const goToLink = (linkType: string) => {
		switch (linkType) {
			case 'youtube':
				return (window.location.href = 'https://www.youtube.com/@minsoo1542')
			case 'instagram':
				return (window.location.href = 'https://www.instagram.com/souvenir.media/')
			default:
				break
		}
	}

    const loadPage = {
        initial: {
            opacity: 0
        },
        show: {
            opacity: 1
        },
        exit : {
            opacity: 0
        }
    }

    const transition = { 
		duration : 3, 
		ease:[0.43,0.13,0.23,0.96],
		staggerChildren: 50,
	}


  return (

		<motion.body className='ahn-container'
        initial='initial'
        animate='show'
        exit='exit'
        variants={loadPage}
        transition={transition}
        >

			<div className='inner-container'>

				<hr className='top-divider' />

				<div className='top-info'>
					<div>Ahn - Song Name</div>
					<div> 2023 </div>
				</div>

				<motion.video
					className='top-video'
					src='https://drive.google.com/uc?id=17tY0xA8tNO8UXs6CeKVu-Ptq64EjxHmQ#t=0.1'
					preload='metadata'
					muted
					controls
				/>

				<div className='box-container'>
					<div className='box-left'>
						Our plant-based family at Oatly came to us with the idea of a taste
						test series with a man-on-the-street vibe, to promote their new
						dairy-free frozen dessert bars. Oatly being Oatly, they opted for
						the route of absurdity: “What would you say if I told you that
						there's not any tuna fish whatsoever in that frozen dessert bar?”
						<br />
						<br />
						Travel to two US cities, give people a taste and ask them what they
						thought about it. Simple, right? No!
					</div>
					<div className='box-right'>
						Challenge 1: It needed to feel like a multi-stop road trip, but we
						only had time to hit two areas. So we had to identify destinations
						that would give us the broadest spectrum of esoteric venues and
						eclectic people.
						<br />
						<br />
						Challenge 2: Even with the best laid plan, the success rate on truly
						wonderful takes was going to be LOW. So we needed to fill our shoot
						days to the absolute brim, capturing way (way) more taste tests than
						a “man on the street” ever truly could.
						<br />
						<br />
						Challenge 3: A heat wave had set its sights on our shoot window. A
						frozen dessert bar was the star of our show, and it would tolerate
						no condition other than absolutely icy coldness. Otherwise we’d be
						looking at a goopy, melty, opposite-of-camera-ready mess. We cracked
						our knuckles and devised one hell of a road map to make this all
						happen.
					</div>
				</div>

				<video
					className='top-video'
					src='https://drive.google.com/uc?id=17tY0xA8tNO8UXs6CeKVu-Ptq64EjxHmQ'
					preload='auto'
					muted
					controls
				/>

				<div className='box-container'>
					<div className='box-left'>
						<img src='https://freight.cargo.site/w/2000/q/75/i/2db34ea645c483daae6a2d98760d44231d125449540cf222a90f18408c1d7ab8/Screenshot---2022-11-12-12.20.25.jpeg' />
					</div>

					<div className='box-right'>
						First up was building out a robust list of location ideas that would
						portray the greatest distance traveled. We then found the main
						attractions in a given city (i.e. a popular beach), then dug deep to
						discover its nuanced and obscure offerings (i.e. annual yarn
						festival). Each of these groupings with strong potential went on the
						map as a “cluster”. This foundation-laying allowed us to make a
						super informed decision on where to head, and in the abridgement of
						the decade, we settled on the Miami and Austin areas. This combo
						gave us the variety of people and places we were seeking, all in a
						frozen-dessert-bar-appropriate climate.
					</div>
				</div>

				<div className='box-container'>
					<div className='box-left'>
						<video
							src='https://drive.google.com/uc?id=1PgBzYSXMU8KDQEij1OF4g1uqLd4GHrKw'
							preload='auto'
							muted
							controls
						/>
					</div>

					<div className='box-right'>
						<video
							src='https://drive.google.com/uc?id=18t52E5G_R6obctl49RgGcql6KdnuoP0x'
							preload='auto'
							muted
							controls
						/>
					</div>
				</div>

				<div className='box-container'>
					<div className='box-left'>
						Then it was time to employ an ancient producing maxim: become
						friends with everyone.
						<br />
						<br />
						Denise at the Giddings, Texas Chamber of Commerce: best friends
						forever. Larry at the Pecan Grove RV park: legend. Tina the West
						Palm Beach water park manager: please forgive us for taking your
						step ladder.
						<br />
						<br />
						Time to figure out how to keep hundreds and hundreds of frozen
						dessert bars reliably ice-cold on a 100+ degree day. No matter how
						good your coolers are, a frozen thing is definitely going to melt if
						that cooler is opened every couple of minutes as we'd be doing.
					</div>
					<div className='box-right'>
						Our plan: install a large chest freezer on the production cube, and
						use it to replenish a series of on-set and in-between coolers. Each
						of these coolers would be refilled from the one a step closer to the
						truck freezer, and each would have fewer and fewer bars in it to
						minimize melting. About 1,000 Oatly bars, half a dozen coolers, and
						a ridiculously powerful portable power battery (to run the freezer
						when we were on the move) were routed to each city in advance of our
						arrival to make this happen.
						<br />
						<br />
						With the benefit of hindsight, we can confirm that this
						multi-phased, madness-harnessed plan was the best form of brilliance
						for this absurdity-filled but dairy-free project. We still have no
						idea what's in those bars.
					</div>
				</div>

				<video
					className='top-video'
					src='https://drive.google.com/uc?id=17tY0xA8tNO8UXs6CeKVu-Ptq64EjxHmQ'
					preload='auto'
					muted
					controls
				/>

				<h2 style={{ fontStyle: 'italic', color: 'white' }}>
					{' '}
					"Cinema is a matter of what's in the frame and what's out."{' '}
				</h2>

				<video
					className='top-video'
					src='https://drive.google.com/uc?id=17tY0xA8tNO8UXs6CeKVu-Ptq64EjxHmQ'
					preload='auto'
					muted
					controls
				/>

				<div className='photo-box'>
					<img src='https://freight.cargo.site/w/2000/q/75/i/eb760320127edb1f7de61c50696a2901db8f1e3fc4889e7e4d54fb5fbeada633/Oatly-2.png' />
					<img src='https://freight.cargo.site/w/1500/q/75/i/62f32e50dc6a232af9f2ba093f442ec28da62980518ca00e48ebc0d568ef0f60/26_ZA_DSCF7350.jpg' />
					<img src='https://freight.cargo.site/w/2000/q/75/i/7825a48c811e04153fe3c3b30f38a80e97e9854c35ba1fc12121501ae47e64e0/06_ZA_DSCF6773.jpg' />
					<img src='https://freight.cargo.site/w/2000/q/75/i/75cefc44d34de6132655766d8d5756f386961621b73199219364f12d68aa276d/IMG_0301.jpg' />
				</div>

				<div className='credits'>

					<div className='credit-column'>
						GRAND CREW 
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        DIRECTOR + DP 
                        <br/>
                        <br/>
                        Zeke Anders 
                        <br/>
                        <br/>
                        EXECUTIVE PRODUCER 
                        <br/>
                        <br/>
                        Ian Kaplan
                        <br/>
                        <br/>
						CREATIVE DIRECTOR 
                        <br/>
                        <br/>
                        Geoff Sean Levy 
                        HOST Cody Reiss 
                        <br/>
                        <br/>
                        PRODUCTION MANAGER
                        <br/>
                        <br/>
						Magen Small 
                        <br/>
                        <br/>
                        PRODUCTION COORDINATOR 
                        <br/>
                        <br/>
                        Olivia Higgins 
                        <br/>
                        <br/>
                        OFFICE PRODUCTION ASSISTANT 
                        <br/>
                        <br/>
                        Clare Stuber 
                        <br/>
                        <br/>
                        RESEARCHERS 
                        <br/>
                        <br/>
                        Misha Hajj Colin Weatherby 
                        Molly Brunk 
                        Flora Manon 
                        <br/>
                        <br/>
                        CAMERA OPERATOR 
                        <br/>
                        <br/>
                        Chris Tharp 
                        <br/>
                        <br/>
                        1ST ACS 
                        <br/>
                        <br/>
                        Beth Ribiero
						Isabel Padilla 
                        <br/>
                        <br/>
                        2ND AC 
                        <br/>
                        <br/>
                        Mike Torres
					</div>

                    <div className='credit-column'>
                        FLORIDA UNIT
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        GAFFER
                        <br/>
                        <br/>
                        Nicolas “Chachito” Donadio
                        <br/>
                        <br/>
                        GRIPS
                        <br/>
                        <br/>
                        Jimena Grajales
                        <br/>
                        <br/>
                        Mauricio Gomez
                        <br/>
                        <br/>
                        SOUND
                        <br/>
                        <br/>
                        Diego Rodriguez
                        <br/>
                        <br/>
                        Omar Suarez
                        <br/>
                        <br/>
                        LOCATION SCOUT
                        <br/>
                        <br/>
                        Madeline Schwartz
                        <br/>
                        <br/>
                        CAMERA PA
                        <br/>
                        <br/>
                        Julian Velasco
                        <br/>
                        <br/>
                        PRODUCTION ASSISTANTS
                        <br/>
                        <br/>
                        Paloma Valdez
                        <br/>
                        <br/>
                        Olivier Nicholas
                        <br/>
                        <br/>
                        Miguel Villaba
                        <br/>
                        <br/>
                        Eric Newcombe
                        <br/>
                        <br/>
                        Earl Rivers
                        <br/>
                        <br/>
                        Ernesto Valbuena
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        TEXAS UNIT
                        <br/>
                        <br/>
                        GAFFER
                        <br/>
                        <br/>
                        Keaton Loudany
                        <br/>
                        <br/>
                        GRIPS
                        <br/>
                        <br/>
                        Noel Maitland
                        <br/>
                        <br/>
                        Keegan Cook
                        <br/>
                        <br/>
                        SOUND
                        <br/>
                        <br/>
                        Matthew Klutchin
                        <br/>
                        <br/>
                        Corey McMinn
                        <br/>
                        <br/>
                        Tiago da Silva
                        <br/>
                        <br/>
                        LOCATION SCOUT
                        <br/>
                        <br/>
                        Matthew Nixon
                        <br/>
                        <br/>
                        PRODUCTION ASSISTANTS
                        <br/>
                        <br/>
                        Alison Whitworth
                        <br/>
                        <br/>
                        Alex Brown
                        <br/>
                        <br/>
                        Brendan Anders
                        <br/>
                        <br/>
                        Amadeus Gonzalez
                        <br/>
                        <br/>
                        Saul Amaraz
                        <br/>
                        <br/>
                        Meg Wilcox
					</div>

                    <div className='credit-column'>
                        OATLY
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        CHIEF CREATIVE OFFICER
                        <br/>
                        <br/>
                        John Schoolcraft
                        <br/>
                        <br/>
                        GLOBAL DESIGN DIRECTOR
                        <br/>
                        <br/>
                        Lars Elfman
                        <br/>
                        <br/>
                        EXECUTIVE CREATIVE DIRECTOR EMEA
                        <br/>
                        <br/>
                        Martin Ringovist
                        <br/>
                        <br/>
                        EXECUTIVE DIRECTOR, BRAND & CREATIVE NA
                        <br/>
                        <br/>
                        Armando Turco
                        <br/>
                        <br/>
                        CREATIVE DIRECTOR NA, WRITER
                        <br/>
                        <br/>
                        Eric Routenberg
                        <br/>
                        <br/>
                        DESIGN DIRECTOR NA, ART DIRECTOR
                        <br/>
                        <br/>
                        Malia Killings
                        <br/>
                        <br/>
                        DIRECTOR & PRODUCTION DIRECTOR NA
                        <br/>
                        <br/>
                        Zeke Anders
                        <br/>
                        <br/>
                        SENIOR PRODUCER
                        <br/>
                        <br/>
                        Celia Ettinger
                        <br/>
                        <br/>
                        SENIOR PROJECT MANAGER
                        <br/>
                        <br/>
                        Ana Ponce de Leon-Dios
                        <br/>
                        <br/>
                        DIGITAL MEDIA STRATEGIST
                        <br/>
                        <br/>
                        Rebecca Mencel
					</div>

                    <div className='credit-column'>
                        EDITORIAL
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        EDITOR
                        <br/>
                        <br/>
                        Conor O'Neill
                        <br/>
                        <br/>
                        Nomad
                        <br/>
                        <br/>
                        EXECUTIVE PRODUCER
                        <br/>
                        <br/>
                        Eric Schoen
                        <br/>
                        <br/>
                        EXECUTIVE PRODUCER
                        <br/>
                        <br/>
                        Oden Roberts
                        <br/>
                        <br/>
                        COLORIST
                        <br/>
                        <br/>
                        Julien Biard
                        <br/>
                        <br/>
                        Carbon
                        <br/>
                        <br/>
                        COLORIST ASSISTANT
                        <br/>
                        <br/>
                        Cassie Benedict
                        <br/>
                        <br/>
                        COLOR EXECUTIVE PRODUCER
                        <br/>
                        <br/>
                        Laurie Adrianopoli
                        <br/>
                        <br/>
                        SENIOR AUDIO ENGINEER
                        <br/>
                        <br/>
                        Marina Killon
                        <br/>
                        <br/>
                        Optimus
                        <br/>
                        <br/>
                        POST PRODUCER
                        <br/>
                        <br/>
                        Alex Campbell
					</div>

				</div>


                <div className='socials'>
                    
                <div className='social-icons' onClick={() => goToLink('instagram') }><FaInstagram/></div>
                <div style={{ color: "white", fontWeight:"lighter", fontSize:"3vw"}}> Souveiner </div>
                <div className='social-icons' onClick={() => goToLink('youtube') }><AiOutlineYoutube/></div>

                </div>



			</div>

		</motion.body>
	)
}

export default Ahn