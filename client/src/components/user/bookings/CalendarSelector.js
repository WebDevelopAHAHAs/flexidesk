import {React, useState} from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import ConvertDate from '../../ConvertDate'

export default function CalendarSelector(props) {
  
  const [selected, changeSelected] = useState(props.date);

  return ( <div className='calendarSelectorDiv'>
    <Calendar
      onChange={changeSelected}
      value={selected}
      onClickDay = {(day) => {
        console.log(day);
        props.setDate(day);
        props.setConvertedDate(ConvertDate(day));
      }}
    />                
  </div> );
}