import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Avatar_icon from '../../icons/avatar.png';
import { logout, selectUser } from '../../Redux/Reducers/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';
import './Profile.css';
const subscriptions = [
  {
    id: 1,
    name: 'Netflix Premium',
    desc: '4k + HDR',
  },
  {
    id: 2,
    name: 'Netflix Standard',
    desc: '1080p',
  },
  {
    id: 3,
    name: 'Netflix Basic',
    desc: '720p',
  },
];
const Profile = () => {
  const [subscribe, setSubscribe] = useState('Netflix Premium');
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        dispatch(logout());
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="profile">
      <Navbar />
      <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <img src={Avatar_icon} alt="Profile Image" />
          <div className="profile_details">
            <h2>{user.email}</h2>
            <div className="profile_plans">
              <h3>Plans (Current Plan : {subscribe})</h3>
              {subscriptions.map((item) => {
                return (
                  <div className="profile_plans_subscribe">
                    <div>
                      <h5>{item.name}</h5>
                      <h6>{item.desc}</h6>
                    </div>
                    <button
                      onClick={() =>
                        setSubscribe(item.name)(
                          alert(`${item.name} Subscribed Successfully🥳`)
                        )
                      }
                    >
                      Subscribe
                    </button>
                  </div>
                );
              })}
              <button onClick={signOut} className="profile_signout">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;