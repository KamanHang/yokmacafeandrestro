import React from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';


const Account = () => {
  const navigate = useNavigate();

  // Retrieve user credentials from localStorage
  const userCred = localStorage.getItem('userCredentials');

  // Decode the token to get user data
  const userData = userCred ? jwtDecode(userCred) : null;

  // Handle the logout action
  const handleLogout = () => {
    // Remove the user credentials from localStorage
    localStorage.removeItem('userCredentials');

    // Redirect or refresh the page (depending on your routing setup)
    navigate('/')
    // Adjust the path as needed
  };

  return (
    <div>
      {/* Display the user's profile picture if available */}
      {userData?.picture && (
        <img src={userData.picture} alt='userimg'  style={{
          width: "50px", // Set the width for the icon size
          height: "50px", // Set the height to make it a square
          borderRadius: "50%", // Make the image circular
          objectFit: "cover", // Ensure the image fits within the circle
        }} />
      )}

      {/* Logout button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Account;