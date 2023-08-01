import React from 'react';

function Employeelist() {
  return (
    <div>
      Employeelist
      <Card name={employeeArray[0].Name id={employeeArray[0]}}></Card>
    </div>
  );
}

export default Employeelist;
