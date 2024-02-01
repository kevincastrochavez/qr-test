import { useState } from 'react';

import { QRCodeSVG } from 'qrcode.react';
import { QrReader } from 'react-qr-reader';

export default function Home() {
  const [data, setData] = useState('No result');
  const [visible, setVisible] = useState(false);

  return (
    <div className='container'>
      <QRCodeSVG value='8237483ughjbqusyr36y' />

      {visible && (
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
          }}
          style={{ width: '100%' }}
        />
      )}

      <button onClick={() => setVisible(true)}>Scan me</button>

      <p>{data}</p>
    </div>
  );
}
