import React from 'react';
import PropTypes from 'prop-types';

const ProfileComponent = (props) => {

    const customStyle= {
        display: "flex",
        justifyContent: "space around",
        margin:"0",
        padding:"0",
        width: '100',
        height: '100',
    }
    return (
        <div  style ={customStyle}>
            <h2>{props.fullName}</h2>
            <p>{props.bio}</p>
            <p>{props.profession}</p>
               {props.children}
               {props.handleName()}
        </div>
    )
};


ProfileComponent.defaultProps ={
    fullName : 'Wael Mhamdi'
}

ProfileComponent.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
   handleName: PropTypes.func.isRequired,
}


export default ProfileComponent;
