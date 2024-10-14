import React from 'react'
import Button from '../components/Button/Button'
import Header from '../components/Header/Header'
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import Loader from '../components/Loader/Loader';

function Profile() {
  const user = useSelector((state) => state.user.user);

  console.log("My User", user);
  if (!user) {
    return <Loader />;
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("User Logged Out!");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };
  return (
    <div className="input-wrapper" >
      <Header />
      <div style={{ marginTop: "8rem" }}>
        <h1>UserName - {user.name}</h1>
        <h1>Email - {user.email}</h1>
        <h1>ID - {user.uid}</h1>
        <Button text={"Logout"} onClick={handleLogout} />
      </div>
    </div>
  )
}

export default Profile;
