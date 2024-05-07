import React, { useState } from 'react';
import './QRCodeGenerator.css'; // Import CSS file for styling

const QRCodeGenerator = () => {
  const [inputValue, setInputValue] = useState('');
  const [qrImageUrl, setQRImageUrl] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const generateQRCode = () => {
    if (!inputValue) {
      alert('Please enter a valid URL');
      return;
    } else {
      setQRImageUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`);
    }
  };

  return (
    <div className="qr-container">
      <h2>QR Code Generator</h2>

      <input
        type="text"
        id="qr-input"
        placeholder="Paste your URL here or type it out"
        value={inputValue}
        onChange={handleInputChange}
      />

      <button id="qr-button" onClick={generateQRCode}>
        Click here to Generate QR Code
      </button>

      {qrImageUrl && (
        <img
          src={qrImageUrl}
          alt={`QR code for ${inputValue}`}
          id="qr-img"
        />
      )}
    </div>
  );
};

export default QRCodeGenerator;
