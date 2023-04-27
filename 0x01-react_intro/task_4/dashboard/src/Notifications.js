import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';


function Notifications() {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <button
        className='close-icon'
        aria-label='Close'
        onClick={() => console.log('Close button has been clicked')}
      >
        <img
          src={closeIcon}
          alt='Close'
        />
      </button>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li
          data-priority='urgent'
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
      
    </div>
  );
};
export default Notifications;