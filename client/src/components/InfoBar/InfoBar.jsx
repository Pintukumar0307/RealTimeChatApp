import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';
import { Link } from 'react-router-dom';


const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>Room: {room}</h3>
    </div>

    <div className="rightInnerContainer">
      <Link to="/"><img src={closeIcon} alt="close icon"  /></Link>
    </div>
  </div>
);

export default InfoBar;