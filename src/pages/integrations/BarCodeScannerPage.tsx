import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/react';
import {
  scan,
  Format,
  checkPermissions,
  requestPermissions,
} from '@tauri-apps/plugin-barcode-scanner';
import { useEffect, useState } from 'react';

const BarCodeScannerPage: React.FC = () => {
  const [hasPermissions, setHasPermissions] = useState(false);

  async function openScanner(): Promise<void> {
    // `windowed: true` actually sets the webview to transparent
    // instead of opening a separate view for the camera
    // make sure your user interface is ready to show what is underneath with a transparent element
    if (!hasPermissions) {
      await requestPermission();
    }
    if (hasPermissions) {
      scan({ windowed: false, formats: [Format.QRCode] });
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
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h3 className='ion-text-center'>Bar Code Scanner</h3>
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
          }}
        />
      </IonContent>
    </IonPage>
  );
};

export default BarCodeScannerPage;
