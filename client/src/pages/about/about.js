import React from 'react';
import Paper from "@material-ui/core/Paper";

// This is the about page
const About = () => {
  return (
    <Paper
    style={{
      height: '100vh',
      backgroundImage: 'linear-gradient(to right top, #d1bebc, #d2c0c1, #c5b0ba, #b2a3b6, #9798b2, #768faa)',
      padding: 0,
      margin: 0
    }}
   elevation={0}
 >
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>About</h1>
    </div>
    </Paper>
  );
};

export default About;