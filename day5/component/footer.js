import React from 'react';

function Footer() {
    let msg="Welcome to React Session"
    const student={
        reg:100,name:"lpu"
    }
  return (
    <div className="footer">
      <p>{msg}</p>
      <p>RegNo:{student.reg}</p>
      <p>Name:{student.name}</p>
    </div>
  );
}

export default Footer;
