import { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

import { QRCodeSVG } from 'qrcode.react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const onScanSuccess = (decodedText) => {
      scanner.clear();
      setData(decodedText);
    };

    const onScanError = (errorMessage) => {
      console.log(errorMessage);
    };

    const scanner = new Html5QrcodeScanner('reader', {
      fps: 5,
      qrbox: {
        width: 250,
        height: 250,
      },
    });

    scanner.render(onScanSuccess, onScanError);
  }, []);

  return (
    <div className='container'>
      <QRCodeSVG value='8237483ughjbqusyr36y' />

      {data ? <div>{data}</div> : <div id='reader'></div>}

      <p>{data}</p>
    </div>
  );
}
