import React from 'react';

const Attendee = ({ attendee, toggleHover }) => (
  <div onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
    {`${attendee.firstName} ${attendee.lastName}`}
  </div>
);

export default Attendee;