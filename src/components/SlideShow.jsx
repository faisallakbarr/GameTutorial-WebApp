import React from "react";
import HomePage from '../pages/HomePage'
import { Link } from "react-router-dom";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import '../styles/custom.css'; // Pastikan untuk menambahkan file CSS untuk styling

const Slideshow = () => {
	//Array of Images
	const images = [ //LETAKKAN IMAGE PADA FOLDER PUBLIC ATAU ERROR!!!!
		"intro-page/mlbb-wallpaper.jpg",
		"intro-page/valorant-wallpaper.jpg",
		"intro-page/hok-wallpaper.jpg",
		"intro-page/lol-wallpaper.jpg",
		"intro-page/cs2-wallpaper.jpg",
		"intro-page/tekken8-wallpaper.jpg",
		"intro-page/streetfighter-wallpaper.jpg",
		"intro-page/eafc24-wallpaper.jpg",
		"intro-page/efootball-wallpaper.jpg",
		"intro-page/dota2-wallpaper.jpg",
	];

	const zoomInProperties = {
		scale: 1,
		duration: 3000,
		transitionDuration: 300,
		infinite: true,
        arrows: false,
	};
	return (
		<div className="w-full h-screen">
			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					<div key={index} className="flex justify-center md:items-center items-start w-screen h-screen relative">
						<div className="image-wrapper">
							<img
								className="w-screen"
								src={each}
							/>
						</div>
						<h1 className="font-sans text-3xl font-semibold absolute top-3 left-3 text-white">GameMaster</h1>
						<div className="w-5/12 h-2/5 absolute m-auto inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 space-y-4 p-4">
							<h1 className="font-game-font text-center z-10 md:text-6xl text-4xl font-bold text-white">GameMaster</h1>
							<p className="font-game-font text-center z-10 md:text-2xl text-xl font-bold text-white">
								Your ultimate website for learning<br/>
								gaming tutorials from A to Z
							</p>
							<Link to='/login' className="font-game-font text-lg text-white z-10 bg-transparent border border-white px-9 py-2 hover:bg-black">
								Get Started
							</Link>
						</div>
					</div>
				))}
			</Zoom>
		</div>
	);
};

export default Slideshow;
