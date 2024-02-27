import React, { useState } from 'react';

const ColorSelector = () => {
  const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black'];
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const buttonStyle = (color) => ({
    backgroundColor: color,
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: color === selectedColor ? '2px solid #000' : 'none',
    margin: '5px',
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left-align' }}>
      {/* <h2 style={{ marginBottom: '20px' }}>Select a color</h2> */}
      <div style={{ display: 'flex' }}>
        {colors.map((color, index) => (
          <button
            key={index}
            style={buttonStyle(color)}
            onClick={() => handleColorChange(color)}
          ></button>
        ))}
      </div>
      {/* <p style={{ marginTop: '20px' }}>Selected color: {selectedColor}</p> */}
    </div>
  );
};

export default ColorSelector;



// import React, { useState, useEffect } from 'react';

// const ColorSelector = () => {
//   const [colors, setColors] = useState([]);
//   const [selectedColor, setSelectedColor] = useState('');

//   useEffect(() => {
//     const fetchColors = async () => {
//       const response = await fetch('/api/colors');
//       const data = await response.json();
//       setColors(data);
//       setSelectedColor(data[0]);
//     };

//     fetchColors();
//   }, []);

//   const handleColorChange = (color) => {
//     setSelectedColor(color);
//   };

//   const buttonStyle = (color) => ({
//     backgroundColor: color,
//     width: '50px',
//     height: '50px',
//     borderRadius: '50%',
//     border: color === selectedColor ? '2px solid #000' : 'none',
//     margin: '5px',
//   });

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <h2 style={{ marginBottom: '20px' }}>Select a color</h2>
//       <div style={{ display: 'flex' }}>
//         {colors.map((color, index) => (
//           <button
//             key={index}
//             style={buttonStyle(color)}
//             onClick={() => handleColorChange(color)}
//           ></button>
//         ))}
//       </div>
//       <p style={{ marginTop: '20px' }}>Selected color: {selectedColor}</p>
//     </div>
//   );
// };

// export default ColorSelector;