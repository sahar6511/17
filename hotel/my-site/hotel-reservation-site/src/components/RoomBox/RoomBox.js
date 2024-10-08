import React from 'react';
import '../../styles/main.scss';

import { Link } from 'react-router-dom';
import WifiIcon from '../Icons/WifiIcon';
import BathIcon from '../Icons/BathIcon';
import BedIcon from '../Icons/BedIcon';

const RoomBox = (props) => {
  const {id,title,src,bed,bath,wifi} = props;
  return (
    <div className='room-box'>
      <div className='room-box--img'>
        <img src={src} alt={src}/>
        <span>$100</span>
      </div>
      <div className='room-box--title'>
        <h4>{title}</h4>
        <span>*****</span>
      </div>
    
        <ul className='room-box--icon'>
        <li><WifiIcon/>{wifi}</li>   
        <li><BedIcon/><span>{bed}تخت</span></li>
        <li><BathIcon/>{bath}حمام</li>
        </ul>

      
      <div className='room-box--info'>
      <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
      </div>
    </div>
  )
}

export default RoomBox