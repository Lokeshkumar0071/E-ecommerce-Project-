// import React, { useState } from 'react';

// const ImageUpload = () => {
//   const [images, setImages] = useState([]);

//   const handleImageUpload = event => {
//     if (event.target.files && event.target.files[0] && images.length < 3) {
//       const img = event.target.files[0];
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImages(oldImages => [...oldImages, reader.result]);
//       };
//       reader.readAsDataURL(img);
//     } else {
//       alert('You can only upload 3 images at a time.');
//     }
//   };

//   return (
//     <div>
//       <button onClick={() => document.getElementById('imageUpload').click()}>
//         Custom Page
//       </button>
//       <input
//         id="imageUpload"
//         type="file"
//         accept="image/*"
//         onChange={handleImageUpload}
//         style={{ display: 'none' }}
//       />
//       {images.map((image, index) => (
//         <img key={index} src={image} alt="Uploaded" style={{ width: '100px', height: '100px' }} />
//       ))}
//     </div>
//   );
// };

// export default ImageUpload;



import React, { useState } from 'react';

const ImageUpload = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = event => {
    if (event.target.files && event.target.files[0] && images.length < 3) {
      const img = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages(oldImages => [...oldImages, reader.result]);
      };
      reader.readAsDataURL(img);
    } else {
      alert('You can only upload 3 images at a time.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
      <button 
        onClick={() => document.getElementById('imageUpload').click()}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
      >
        Custom Page
      </button>
      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt="Uploaded" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px' }} />
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;