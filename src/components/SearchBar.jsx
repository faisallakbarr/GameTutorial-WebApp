import React from "react";
import PropTypes from "prop-types";
import { CiSearch } from "react-icons/ci";

function SearchBar({ keyword, keywordChange }) {
    return (
        <div className="flex justify-center mt-14">
        <div className="relative">
            <input
                className="py-3 px-4 w-96 md:w-96 lg:w-96 bg-gray-700 text-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style={{ width: "1000px" }}
                type="text"
                placeholder="Find by title..."
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)}
            />
            <CiSearch 
            className="absolute right-4 text-3xl top-1/2 transform -translate-y-1/2 text-white"
            />
            </div>
        </div>
    );
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
