import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navigation({ authUser, signOut }) {
    if (!authUser) {
        return <h1>a</h1>; // or return some default navigation for unauthenticated users
    }

    const { id, photo, name } = authUser;

    return (
        <div>
            <h3>GameMaster</h3>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/video">Video</Link>
                <Link to="/forum">Forum</Link>
                <button onClick={signOut}>Sign Out</button>
            </nav>
        </div>
    );
}

Navigation.propTypes = {
    authUser: PropTypes.shape({
        id: PropTypes.string,
        photo: PropTypes.string,
        name: PropTypes.string
    }),
    signOut: PropTypes.func.isRequired
};

export default Navigation;
