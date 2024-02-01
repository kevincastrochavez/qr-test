import { useState } from 'react';

import { QRCodeSVG } from 'qrcode.react';
import { QrReader } from 'react-qr-reader';

export default function Home() {
  const [data, setData] = useState('No result');
  const [visible, setVisible] = useState(false);

  const handleScan = (data) => {
    if (data) {
      console.log('Result: ', data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className='container'>
      <QRCodeSVG value='8237483ughjbqusyr36y' />

      {visible && (
        <QrReader
          delay={500}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      )}

      <button onClick={() => setVisible(true)}>Scan me</button>

      <p>{data}</p>
    </div>
  );
}
