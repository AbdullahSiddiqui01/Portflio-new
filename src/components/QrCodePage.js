import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import '../styles/QrCodePage.css';  // Import the CSS file for QRCode styling

const QRCodeComponent = () => {
  const portfolioURL = 'https://your-portfolio-link.com';

  return (
    <div className="qr-code-container">
      <h2>Scan to get my profile URL</h2>
      <QRCodeCanvas value={portfolioURL} size={256} />
    </div>
  );
};

export default QRCodeComponent;
