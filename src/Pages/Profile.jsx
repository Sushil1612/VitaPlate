import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({});

  const validateProfile = () => {
    const newErrors = {};
  
    if (!profileData.name.trim()) newErrors.name = "Name is required.";
    else if (profileData.name.length < 3) newErrors.name = "Name must be at least 3 characters.";
  
    if (!profileData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profileData.email))
      newErrors.email = "Invalid email format.";
  
      if (!profileData.phone.trim()) {
        newErrors.phone = "Phone number is required.";
      } else if (!/^(\+91[-\s]?)?[6-9]\d{9}$/.test(profileData.phone)) {
        newErrors.phone = "Invalid Indian mobile number.";
      }      
  
    if (profileData.dob && new Date(profileData.dob) > new Date())
      newErrors.dob = "Date of birth cannot be in the future.";
  
    if (!profileData.gender) newErrors.gender = "Gender is required.";
  
    return newErrors;
  };
  

  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91-9876543210",
    address: "123, Main Road, Pune, India",
    dob: "1995-08-15",
    gender: "Male",
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleToggleEdit = () => {
    if (isEditing) {
      const validationErrors = validateProfile();
      setErrors(validationErrors);
  
      if (Object.keys(validationErrors).length === 0) {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
        setIsEditing(false);
      }
    } else {
      setErrors({});
      setIsEditing(true);
    }
  };
  

  return (
    <div className="profile-container">
      <div className="profile-card">
        {showPopup && <div className="popup">✅ Changes saved!</div>}

        <div className="profile-picture">
          <img src="https://via.placeholder.com/150" alt="User" />
        </div>

        <div className="profile-info">
        {["name", "email", "phone", "dob", "gender", "address"].map((field) => (
  <div className="profile-field" key={field}>
    <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
    {field === "gender" ? (
      <select
        name="gender"
        value={profileData.gender}
        onChange={handleChange}
        disabled={!isEditing}
      >
        <option value="">Select</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
    ) : field === "address" ? (
      <textarea
        name="address"
        rows={3}
        value={profileData.address}
        onChange={handleChange}
        readOnly={!isEditing}
      />
    ) : (
      <input
        type={field === "dob" ? "date" : "text"}
        name={field}
        value={profileData[field]}
        onChange={handleChange}
        readOnly={!isEditing}
      />
    )}
    {errors[field] && <div className="error-msg">{errors[field]}</div>}
  </div>
))}


          <button className="edit-btn" onClick={handleToggleEdit}>
            {isEditing ? "Save" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
