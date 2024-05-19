import React from 'react'

const User = ({userID}) => {
    let userName;

    switch (userID){
        case 1: {
            userName = "Maung Maung"
            break;
        }
        case 2: {
            userName = "Zaw Zaw"
            break;
        }
        case 3: {
            userName = "Ma Ma";
            break;
        }
        case 4: {
            userName = "Ma Nu";
            break;
        }
        case 5: {
            userName = "May";
            break;
        }
        case 6: {
            userName = "Loe Loe";
            break;
        }
        case 7: {
            userName = "Zwe Zwe";
            break;
        }
        case 8: {
            userName = "Ngaw Ngaw";
            break;
        }
        case 9: {
            userName = "Hla Hla";
            break;
        }
        case 10: {
            userName = "Nyi Say";
            break;
        }
        default: {
            userName = "unknown";
            break;
        }
    }
  return (
    <>
        <p>Posted by <span className='userName'>{userName}</span></p>
    </>
  )
}

export default User