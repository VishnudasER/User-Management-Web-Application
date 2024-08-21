// components/Profile.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('profile_image', profileImage);

    await fetch('/api/profile/', {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${user.token}` },
      body: formData,
    });
  };

  return (
    <div>
      <h1>{user.username}</h1>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default Profile;
