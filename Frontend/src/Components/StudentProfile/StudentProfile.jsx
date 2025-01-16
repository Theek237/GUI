import React, { useEffect, useState } from "react";
import axios from "axios";

export default function StudentProfile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    if (!token) {
      setError("No token found. Please log in first.");
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("http://localhost:3001/api/studentprofile/profile", config)
      .then((response) => {
        // response.data.profile should contain the data from your SQL query
        console.log("Response:", response.data); // Check the response

        setProfile(response.data.profile);
      })
      .catch((err) => {
        // Display an error if the request fails for any reason
        console.error(err);
        setError(err.response?.data?.error || "Failed to fetch profile");
      });
  }, []);

  // If there's an error, show it. If there's no profile yet, you can show a loading message.
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!profile) {
    return <div>Loading profile...</div>;
  }

  // Once fetched, display the data
  return (
    <div>
      <h2>Student Profile</h2>
      <div>
        <strong>Auth ID:</strong> {profile.auth_id}
      </div>
      <div>
        <strong>Student ID:</strong> {profile.StudentID}
      </div>
      <div>
        <strong>Name:</strong> {profile.StudentName}
      </div>
      <div>
        <strong>Email:</strong> {profile.StudentEmail || profile.email}
      </div>
      <div>
        <strong>Mobile Number:</strong> {profile.StudentMobileNo}
      </div>
      <div>
        <strong>Created At:</strong> {profile.created_at}
      </div>
    </div>
  );
}
