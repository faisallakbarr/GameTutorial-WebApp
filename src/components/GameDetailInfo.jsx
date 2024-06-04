import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const GameDetailInfo = ({ image, title, desc, webLink, download }) => {
  return (
    <div className='relative text-white'>
    <img
          src={image}
          alt=""
          className="relative object-cover w-52 h-full md:h-72 lg:h-full rounded-lg"
          style={{ maxHeight: '21rem', top: '380px', left: '30px'}} 
        />
        <Link to="/home">
        <button
        className='absolute top-3 left-12 text-xl px-9 py-2 border-none bg-black bg-opacity-50 rounded-full flex'
        ><FaRegArrowAltCircleLeft className='text-2xl mr-2 m-auto' />Back</button>
        </Link>
        <h3
        className="relative text-5xl font-bold"
        style={{ maxHeight: '21rem', top: '120px', left: '270px'}} 
        >{title}</h3>
        <p
        className="relative w-96 text-sm pt-4"
        style={{ maxHeight: '21rem', top: '150px', left: '270px'}} 
        >{desc}</p>
        <Link to="/video">
        <button
        className="relative w-96 text-sm px-3 py-2 bg-nav-hover"
        style={{ top: '80px', left: '700px'}} 
        >Watch Game Tutorial</button>
        </Link>
        <a href={webLink} target='_blank'>
        <button
        className="relative w-96 text-sm px-3 py-2 bg-nav-hover"
        style={{ top: '190px', left: '-110px'}} 
        >Visit Official Website</button>
        </a>
        <a href={download} target='_blank'>
        <button
        className="relative text-sm px-5 py-5 bg-nav-hover"
        style={{ top: '190px', left: '-50px'}} 
        >Download The Game</button>
        </a>
    </div>
  )
}

export default GameDetailInfo
