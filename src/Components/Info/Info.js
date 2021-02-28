import React from 'react';
import './Info.css';

const Info = (props) => {
    const friendInfo = props.friendInfo;
    const getSalary=friendInfo.reduce((previous,current)=>previous+current.salary,0)
    
  
    return (
        <div className='info-container'>
            <h1>Add User Information</h1>
            <h3>Total Add Friend: {friendInfo.length}</h3>
            <h2>Total Add Friend Salary: {getSalary}</h2>
        </div>
    );
};

export default Info;