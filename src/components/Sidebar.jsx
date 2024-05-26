import React, {useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdHome } from "react-icons/io";
import { MdDarkMode, MdLightMode, MdForum, MdVideoLibrary, MdLogout } from "react-icons/md";

function Sidebar({ authUser, signOut }) {
    const [open, setOpen] = useState(true)
    if (!authUser) {
        return; 
    }

    const { email, photo, name } = authUser;
    const Menus = [
        {title: "Home", icon: <IoMdHome />, link: "/"},
        {title: "Video Library", icon: <MdVideoLibrary />, link: "/video-library"},
        {title: "Forum", icon: <MdForum />, link: "/forum", gap: true},
        {title: "Dark Mode", icon: <MdDarkMode />},
        {title: "Logout", icon: <MdLogout />, onClick: signOut, gap: true}
    ]

    return (
        <div 
        className={`${open ? "w-72" : "w-24"} duration-300 h-screen  pt-8 bg-blue-500 relative`}
        >
            <h1 className="text-4xl text-center font-bold mb-9">Game<br />Master</h1>
        <div className="flex gap-x-4 items-center m-9">
        <img src={photo} alt={email} title={name} />
        <RxHamburgerMenu 
        className={`${open && 'rotate-[180deg]'} absolute duration-500 cursor-pointer bottom-5 text-4xl `}
        onClick={() => setOpen(!open)}
        />
        </div>
        <ul className="space-y-2">
            {Menus.map((menu, index) => (
                <li 
                key={index} 
                className={`${menu.gap ? 'mt-6' : ''} text-grey-300 text-2xl flex items-center gap-x-4 cursor-pointer mx-3 p-2 py-3 hover:bg-white rounded-md`}
                >
                {menu.icon}
                <Link to={menu.link} className={`${!open && 'hidden'} origin-left duration-200`}>
                {menu.title}
            </Link>
                </li>
            ))}
        </ul>
        
        </div>
    );
}

Sidebar.propTypes = {
    authUser: PropTypes.shape({
        id: PropTypes.string,
        photo: PropTypes.string,
        name: PropTypes.string
    }),
    signOut: PropTypes.func.isRequired
};

export default Sidebar;
