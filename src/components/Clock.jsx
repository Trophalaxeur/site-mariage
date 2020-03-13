import React from 'react';
import PropTypes from 'prop-types';
import './Clock.scss';

const Clock = (props) => {
  const hourAsDegree = (props.hours + props.minutes / 60) / 12 * 360;
  const minuteAsDegree = props.minutes / 60 * 360;

  const hourStyle = { transform: `rotate(${hourAsDegree}deg)` };
  const minuteStyle = { transform: `rotate(${minuteAsDegree}deg)` };
  // const secondStyle = { transform: `rotate(${secondAsDegree}deg)` };
  const colorIndexClass = props.colorIndex ? `clock-bgcolor-${props.colorIndex}` : 'clock-default-color';

  return (
    <div className="clock outer_face neutral-2">
      <div className="outer_to_medium_face">
        <div className={`medium_face ${colorIndexClass}`}>
          <div className="marker oneseven" />
          <div className="marker twoeight" />
          <div className="marker fourten" />
          <div className="marker fiveeleven" />
          <div className="medium_to_inner_face">
            <div className={`inner_face ${colorIndexClass}`}>
              <div className="hand hour" style={hourStyle} />
              <div className="hand minute" style={minuteStyle} />
              {/* <div className="hand second" style={secondStyle} />*/}
            </div>
          </div>
        </div>
      </div>

    </div>);
};


Clock.propTypes = {
  colorIndex: PropTypes.string.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired
};

Clock.defaultProps = {
  colorIndex: ''
};

export default Clock;
