import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonBackButton,
  IonButtons,
} from '@ionic/react';
import {
  scan,
  Format,
  checkPermissions,
  requestPermissions,
  cancel,
} from '@tauri-apps/plugin-barcode-scanner';
import { useEffect, useState } from 'react';

const BarCodeScannerPage: React.FC = () => {
  const [hasPermissions, setHasPermissions] = useState(false);

  const [scannedData, setScannedData] = useState<string | null>();

  async function openScanner(): Promise<void> {
    // `windowed: true` actually sets the webview to transparent
    // instead of opening a separate view for the camera
    // make sure your user interface is ready to show what is underneath with a transparent element
    if (!hasPermissions) {
      await requestPermission();
    }
    if (hasPermissions) {
      setTimeout(() => {
        cancel();
        setScannedData('No data found. Try again.');
      }, 15000);
      const data = await scan({ windowed: false, formats: [Format.QRCode] });

      setScannedData(data.content);
    }
  }

  async function requestPermission(): Promise<boolean> {
    const newPermissionState = await requestPermissions();
    if (newPermissionState === 'granted') {
      setHasPermissions(true);
      return true;
    } else {
      setHasPermissions(false);
      return false;
    }
  }

  useEffect(() => {
    const checkPermissionState = async (): Promise<void> => {
      const permissionState = await checkPermissions();
      if (permissionState === 'granted') {
        setHasPermissions(true);
      } else {
        requestPermission();
      }
    };
    checkPermissionState();
  }, []);

  return (
    <IonPage className='about-page'>
      <IonHeader style={{ zIndex: 1000 }}>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/tabs/integrations' />
          </IonButtons>
          <IonTitle>Bar Code Scanner</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Bar Code Scanner</IonTitle>
          </IonToolbar>
        </IonHeader>

        <p className='ion-text-center ion-padding'>
          <IonButton expand='full' onClick={() => openScanner()}>
            Open Scanner
          </IonButton>
        </p>
        <div
          style={{
            width: '70%',
            margin: 'auto',
            height: '50%',
            border: '3px solid black',
            borderRadius: '10px',
            background: 'transparent',
            display: 'flex',
          }}
        >
          <div style={{ margin: 'auto' }}>{scannedData}</div>
        </div>
        <p className='ion-text-center ion-padding'>
          <IonButton
            expand='full'
            disabled={scannedData ? false : true}
            onClick={() => setScannedData('')}
          >
            Clear
          </IonButton>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default BarCodeScannerPage;
