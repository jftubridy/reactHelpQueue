import React from 'react';

function Header() {
  return (
    <h1><style jsx> {`
    h1 {
      color: black;
    }
    h1:hover {
      color: green;
    }
    `}</style>Help Queue</h1>
    //   <style jsx>{`
    //   div {
    //     color: purple;
    //   }
    // `}</style>
  );
}

export default Header;
