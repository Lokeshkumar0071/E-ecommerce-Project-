
// // import React, { useState } from 'react';

// // const SizeSelector = () => {
// //   const [size, setSize] = useState('S');

// //   const handleSizeChange = (event) => {
// //     setSize(event.target.value);
// //   };

// //   return (
// //     <div>
// //       <label>
// //         <input type="radio" value="S" checked={size === 'S'} onChange={handleSizeChange} />
// //         Small
// //       </label>
// //       <label>
// //         <input type="radio" value="M" checked={size === 'M'} onChange={handleSizeChange} />
// //         Medium
// //       </label>
// //       <label>
// //         <input type="radio" value="L" checked={size === 'L'} onChange={handleSizeChange} />
// //         Large
// //       </label>
// //     </div>
// //   );
// // };

// // export default SizeSelector;


// import React, { useState } from 'react';


// const SizeSelector = () => {
//   const [size, setSize] = useState('S');

//   const handleSizeChange = (size) => {
//     setSize(size);
//   };

//   return (
//     <div className="size-selector">
//       <button className={`size-option ${size === 'S' ? 'selected' : ''}`} onClick={() => handleSizeChange('S')}>S</button>
//       <button className={`size-option ${size === 'M' ? 'selected' : ''}`} onClick={() => handleSizeChange('M')}>M</button>
//       <button className={`size-option ${size === 'L' ? 'selected' : ''}`} onClick={() => handleSizeChange('L')}>L</button>
//     </div>
//   );
// };

// export default SizeSelector;


import React, { useState } from 'react';

const SizeSelector = () => {
  const [size, setSize] = useState('S');

  const handleSizeChange = (size) => {
    setSize(size);
  };

  const sizeOptionStyle = {
    // margin: '10px',
    // padding: '10px',
    // border: '1px solid #000',
    // borderRadius: '5px',

    margin: '8px',
  padding: '5px 10px', // less vertical padding, more horizontal padding
  border: '1px solid #000',
  borderRadius: '5px',
  };

  const selectedSizeOptionStyle = {
    ...sizeOptionStyle,
    backgroundColor: '#000',
    color: '#fff',
  };

  return (
    <div style={{ display: 'flex' }}>
      <button style={size === 'S' ? selectedSizeOptionStyle : sizeOptionStyle} onClick={() => handleSizeChange('S')}>S</button>
      <button style={size === 'M' ? selectedSizeOptionStyle : sizeOptionStyle} onClick={() => handleSizeChange('M')}>M</button>
      <button style={size === 'L' ? selectedSizeOptionStyle : sizeOptionStyle} onClick={() => handleSizeChange('L')}>L</button>
    </div>
  );
};

export default SizeSelector;