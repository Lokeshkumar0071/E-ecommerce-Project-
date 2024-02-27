import axios from 'axios';
import { useState } from 'react';

import Wrapper from "@layout/wrapper";
import SEO from "@components/seo";
import Header from "@layout/header";
import Footer from "@layout/footer";
import ShopBreadcrumb from "@components/common/breadcrumb/shop-breadcrumb";
import ShopCta from "@components/cta";
import _customHeading from '@components/_customHeading';

const handleSizeChange = event => {
    setSelectedSize(event.target.value);
  };


export default function Custom() {
  const [selectedColor, setSelectedColor] = useState('');
  const [dialogBoxes, setDialogBoxes] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isAddDialogHovered, setIsAddDialogHovered] = useState(false);

  const handleImageUpload = (event, id) => {
    const updatedDialogBoxes = dialogBoxes.map(dialog => {
      if (dialog.id === id) {
        return { ...dialog, image: URL.createObjectURL(event.target.files[0]) };
      }
      return dialog;
    });
    setDialogBoxes(updatedDialogBoxes);
  };

  const handleColorChange = event => {
    setSelectedColor(event.target.value);
  };

  const handleAddDialog = () => {
    if (dialogBoxes.length < 3) {
      setDialogBoxes([...dialogBoxes, { id: dialogBoxes.length, image: null }]);
    } else {
      alert('You can only upload 3 images at a time.');
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', selectedImage);
    formData.append('upload_preset', 'YOUR_CLOUDINARY_UPLOAD_PRESET');

    const res = await axios.post('https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload', formData);
    const imageUrl = res.data.secure_url;

    await axios.post('/api/custom', { color: selectedColor, imageUrl });
  };

  return (
    <Wrapper>
      <SEO pageTitle={"Shop"} />
      <Header style_2={true} />
      <ShopBreadcrumb />
      <div style={{ border: '1px solid black', width: '90%', margin: 'auto', padding: '20px', borderRadius: '10px' }}>
        {/* <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Customize Your Frame</h1> */}
        <_customHeading/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <div style={{ border: '1px solid black', padding: '50px', borderRadius: '10px', width:'500px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Upload Your Image</h3>
          <button 
  onMouseEnter={() => setIsAddDialogHovered(true)}
  onMouseLeave={() => setIsAddDialogHovered(false)}
  style={{
    border: '1px solid black',
    backgroundColor: isAddDialogHovered ? 'black' : 'white',
    color: isAddDialogHovered ? 'white' : 'black',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    height: '40px',
    width: '200px',
    fontSize: '16px',
  }}
  onClick={handleAddDialog}
>
  Add Image
</button>
          {dialogBoxes.length > 0 && (
            <div style={{ border: '1px solid gray', padding: '20px', borderRadius: '10px' }}>
              {dialogBoxes.map((dialog, index) => (
                <div key={index}>
                  <input type="file" onChange={(e) => handleImageUpload(e, dialog.id)} />
                  {dialog.image && (
                    <div style={{ border: '1px solid black', width: '100px', height: '100px', overflow: 'hidden' }}>
                      <img src={dialog.image} alt="Preview" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ 
  border: '1px solid black', 
  padding: '20px', 
  borderRadius: '10px', 
  width:'500px', 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center' 
}}>
  <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Put Magic in Your Frame</h3>
  <select onChange={handleColorChange} style={{ padding: '10px', fontSize: '16px', width:'70%'  }}>
    <option value="">Select a color</option>
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="green">Green</option>
    <option disabled>More Color Soon...</option>
  </select>
  <br />
  <select onChange={handleSizeChange} style={{ padding: '10px', fontSize: '16px', marginTop: '10px', width:'70%' }}>
    <option value="">Select a size</option>
    <option value="large">Large</option>
    <option value="medium">Medium</option>
    <option value="small">Small</option>
  </select>
</div>
<button 
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  style={{
    border: '1px solid black',
    backgroundColor: isHovered ? 'black' : 'white',
    color: isHovered ? 'white' : 'black',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    height: '40px',
    width: '200px',
    fontSize: '16px',
  }}
>
  Submit
</button>
      </div>
      </div>
      <div style={{ height: '200px' }}></div>
      <ShopCta />
      <Footer />
    </Wrapper>
  );
}