
import React from 'react';

function MyStyledComponent(props) {
/*  var myStyledComponentStyles = {
    backgoundColor: '#ecg0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  } */
  return (
    <div>
      <p className="red-text">Only this paragraph will get the syle :) </p>
      <style jsx>{`
        .red-text {
          color:red;
        }
      `}</style>
    </div>

  /*  <div style={myStyledComponentStyles}>
      <h1>Hey, I'm a component</h1>
      <h2>But there's something different about me .....</h2>
      <h3>Unlike other components you have worked with thus far....</h3>
      <h4>I also include custom CSS sytles!</h4>
      <p>Pretty cool, right</p>
    </div>
  );
} */

export default MyStyledComponent;
