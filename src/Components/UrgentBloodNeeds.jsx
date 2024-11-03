import  { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Assuming you're using react-icons for the search icon

const UrgentBloodNeeds = () => {
    const [urgentRequests, setUrgentRequests] = useState([]); // State to store requests
    const [newRequest, setNewRequest] = useState({ bloodType: '', quantity: '', contact: '' });

    const handleAddRequest = () => {
        // Functionality to add new urgent blood needs
        if (newRequest.bloodType && newRequest.quantity && newRequest.contact) {
            setUrgentRequests([...urgentRequests, newRequest]);
            setNewRequest({ bloodType: '', quantity: '', contact: '' }); // Reset form
        }
    };

    const handleDeleteRequest = (index) => {
        // Functionality to delete a request
        const updatedRequests = urgentRequests.filter((_, i) => i !== index);
        setUrgentRequests(updatedRequests);
    };

    return (
        <div className="urgent-blood-needed-container">
            <h2>Urgent Blood Needed</h2>
            <div className="search-bar">
                <input type="text" placeholder="Search for blood type..." />
                <button><FaSearch /></button>
            </div>
            <div className="urgent-requests">
                {urgentRequests.map((request, index) => (
                    <div key={index} className="urgent-request">
                        <h3>Blood Type: {request.bloodType}</h3>
                        <p>Quantity Needed: {request.quantity}</p>
                        <p>Contact: {request.contact}</p>
                        <button onClick={() => handleDeleteRequest(index)}>Delete</button>
                    </div>
                ))}
            </div>
            <div className="add-request-form">
                <input
                    type="text"
                    placeholder="Blood Type (e.g., A+, B-, O+)"
                    value={newRequest.bloodType}
                    onChange={(e) => setNewRequest({ ...newRequest, bloodType: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Quantity Needed"
                    value={newRequest.quantity}
                    onChange={(e) => setNewRequest({ ...newRequest, quantity: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Contact Information"
                    value={newRequest.contact}
                    onChange={(e) => setNewRequest({ ...newRequest, contact: e.target.value })}
                />
                <button onClick={handleAddRequest}>Add Urgent Request</button>
            </div>
        </div>
    );
};

export default UrgentBloodNeeds;
