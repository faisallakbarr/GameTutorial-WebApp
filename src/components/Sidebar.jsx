import React, {useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { MdDarkMode, MdLightMode, MdForum, MdVideoLibrary, MdLogout } from "react-icons/md";

function Sidebar({ authUser, onSignOut }) {
    // const [open, setOpen] = useState(true) //for minimize function
    if (!authUser) {
        return; 
    }

    const { email, photo, name } = authUser;
    const Menus = [
        {title: "Home", icon: <IoMdHome />, link: "/"},
        {title: "Video Library", icon: <MdVideoLibrary />, link: "/video"},
        {title: "Forum", icon: <MdForum />, link: "/forum", gap: true},
        {title: "Dark Mode", icon: <MdDarkMode />},
    ]

    return (
        <div 
        className="w-72 duration-300 h-screen bg-home-bg text-white pt-8 bg-relative"
        >
            <h1 className="text-4xl text-center font-bold mb-9">Game<br />Master</h1>
        <div className="flex gap-x-4 items-center m-9">
        <img src={photo} alt={email} title={name} />
        </div>
        <ul className="space-y-2">
            {Menus.map((menu, index) => (
                <li 
                key={index} 
                className={`${menu.gap ? 'mt-6' : ''} text-grey-300 text-2xl flex items-center gap-x-4 cursor-pointer mx-3 p-2 py-3 hover:bg-nav-hover rounded-md`}
                >
                {menu.icon}
                <Link to={menu.link} className="origin-left duration-200">
                {menu.title}
            </Link>
                </li>
            ))}
            <div className="text-grey-300 text-2xl flex items-center gap-x-4 cursor-pointer mx-3 p-2 py-3 hover:bg-nav-hover rounded-md">
            <MdLogout />
            <button className="" type="button" onClick={onSignOut}>Sign out</button>
            </div>
            </ul>
        </div>
    );
}

Sidebar.propTypes = {
    authUser: PropTypes.shape({
        email: PropTypes.string,
        photo: PropTypes.string,
        name: PropTypes.string
    }),
    signOut: PropTypes.func.isRequired
};

export default Sidebar;
