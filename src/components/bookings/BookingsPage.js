import React, { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function SelectedDesk(ShowDesk){
  return(
    <div>
      <h1>FORM HERE</h1>
      <p>Book Now</p>
    </div>
  )
}

function ShowDesk(day){
  console.log(day)
return(
  <div>
      {/* renders desks available (connected to backend) */}
   <button onClick={SelectedDesk}> Desk 1</button>
   {/* onClick will render form to book w/covid questions */}
    {/* onClick > execute another function for form (look at react events - https://reactjs.org/docs/handling-events.html) content and logic seperated out (dont call twice) */}
  <SelectedDesk/>
  </div>
)
}

function Bookings() {
  const [value, onChange] = useState(new Date());
  
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        // passes argument 
        onClickDay={(day)=> ShowDesk(day)}
      />
      {/* renders ShowDesk function after a day is clicked */}
      <ShowDesk/>

    </div>

  );
}


export default Bookings;
