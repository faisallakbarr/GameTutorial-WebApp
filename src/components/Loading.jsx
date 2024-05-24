import React from "react";
import { connect } from 'react-redux';
import LoadingBar from "react-redux-loading-bar";

function Loading() {
    return (
        <div className="loading">
            <LoadingBar />
        </div>
    )
}

export default Loading;