import React from 'react';
import Attendee from './Attendee.jsx';

class AttendeeSkillList extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleHover(e) {
    console.log(e.target);
  }

  render() {
    const { title, attendees } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        {attendees ? attendees.map(a => <Attendee toggleHover={this.toggleHover} attendee={a} key={a._id} />) : '(none)'}
      </div>
    );
  }
}

export default AttendeeSkillList;