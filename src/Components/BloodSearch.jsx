import  { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon from react-icons


const BloodSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // Implement your search functionality here
        console.log("Searching for:", searchTerm);
    };

    return (
        <div className="blood-search-container" id='find-blood'>
            <h2>Search for Blood Donors</h2>
            <div className="search-input-container">
                <input 
                    type="text" 
                    placeholder="Enter blood type or location" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    className="search-input" 
                />
                <button onClick={handleSearch} className="search-button">
                    <FaSearch /> {/* Include the search icon here */}
                    Search
                </button>
            </div>
        </div>
    );
};

export default BloodSearch;
