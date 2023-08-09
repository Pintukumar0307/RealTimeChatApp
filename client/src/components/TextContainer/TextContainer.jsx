import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import './TextContainer.css';

const TextContainer = ({ users }) => {

  console.log(users[0]);

  return (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <h2>Live People:</h2>
<div className="activeContainer">
  <h3>
    {users.map(({name}) => (

      <div key={name} className="activeItem">
        <img alt="Online Icon" src={onlineIcon}/> {name}

      </div>
    ))}
  </h3>
</div>
          </div>
        )
        : null
    }
  </div>
)
  };
export default TextContainer;

// import React from "react";
// import "./TextContainer.css";

// import onlineIcon from "../../icons/onlineIcon.png";


// const TextContainer = ({ users }) => (
//   <div className="temp1">
//     <h2>Live:</h2>
//     <div className="activeContainer">
      
//         {users.map(({ name }) => (
//           <div key={name} className="activeItem">
//             <img alt="Online Icon" src={onlineIcon} />
//             <h3>{name}</h3>
//           </div>
//         ))}
      
//     </div>
//   </div>
// );

// export default TextContainer;


