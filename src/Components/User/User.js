import React from 'react';
import Info from '../Info/Info';
import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    const userInfo = props.userData;
    const handleAddFriend=props.handleFriend;
    const addFriend= props.getFriendInfo; //for button
    console.log(userInfo);
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h1>Total Users: {userInfo.length}</h1>
            </div>
            <div className="main-container">
                <div className="user-container">
                    {
                        userInfo.map(user => {
                            return (
                                <div className="profile-pic">
                                    <img src={user.img} alt="" />
                                    <div>
                                        <h1>{user.name}</h1>
                                        <h2>Job Title: {user.jobTitle}</h2>
                                        <h4>Salary: {user.salary}</h4>
                                        <h5>Phone: {user.phone}</h5>
                                        <h3>Email: {user.email}</h3>

                                        <button onClick={()=>handleAddFriend(user)}> <FontAwesomeIcon icon={faUserPlus} />  Add Friend</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="info-body">
                    <Info friendInfo={addFriend}></Info>
                </div>
            </div>
        </div>
    );
};

export default User;