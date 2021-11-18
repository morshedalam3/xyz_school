import React, { useState } from 'react';
import Calendar from 'react-calendar';
const Calander = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div>
           <h3 style={{backgroundColor:"rgba(66, 131, 5, 0.733)", textAlign:"center", padding:"6px"}}>দিনপঞ্জিকা </h3>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
    );
};

export default Calander;