import React from 'react';

export default function Forge() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#1a1a1a',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Welcome to the Forge</h1>
      <p>This is where the main application will be built.</p>
    </div>
  );
}