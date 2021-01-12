import {React, useState} from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import DeskSelector from './DeskSelector'

export default function CalendarSelector() {
    
  const [value, onChange] = useState(new Date());

  return (
   <div className='calendarSelectorDiv'>
      <Calendar
          onChange={onChange}
          value={value}
          // passes argument
          // onClickDay={(day)=> ShowDesk(day, setOpen, setDeskNum, open, deskNum)}
          onClickDay = {(day) => DeskSelector(day)}
       />                
  </div>
);
}