import React from 'react'

function UserProfile({ hasError }) {
    if(hasError) {
        throw new Error("User profile failed to load!");
    }

  return (
    <div>
    <h2>User Profile</h2>  
    <p>Name: Lokesh</p>
    <p>Role: React Learner</p>
    </div>
  );
}

export default UserProfile;
