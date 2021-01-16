import {React, useState} from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

// import DeskSelector from './DeskSelector'

export default function CalendarSelector(props) {
  
  const [value, onChange] = useState(new Date());

  console.log(value)

  return ( <div className='calendarSelectorDiv'>
    <Calendar
      onChange={onChange}
      value={value}
      // passes argument
      // onClickDay={(day)=> ShowDesk(day, setOpen, setDeskNum, open, deskNum)}
      // onClickDay = {(day) => DeskSelector(day)}
      onClickDay = {(day) => {
        console.log(day);
        props.setDate(day);
      }}
    />                
  </div> );
}