import React, { useState, useEffect } from 'react';

const _customHeading = () => {
  const colors = ['black', 'darkgray', 'gray', 'lightgray'];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((colorIndex + 1) % colors.length);
    }, 100);
    return () => clearInterval(intervalId);
  }, [colorIndex, colors.length]);

  return (
    <div>
      <h1 style={{ color: colors[colorIndex], textAlign: 'center', marginBottom: '20px' }}>Customize Your Frame</h1>
    </div>
  )
}

export default _customHeading;